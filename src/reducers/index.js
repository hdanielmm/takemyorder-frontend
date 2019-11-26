import { DELETE_ITEM_FROM_ORDER } from '../actions/deleteItem';
import { ADD_ITEM_TO_ORDER } from '../actions/addItem';
import { SHOW_ITEMS } from '../actions/loadItems';
import { CONFIRM_ORDER } from '../actions/confirmOrder';

const initialState = {
  itemsList: [],
  order: {
    items: [],
    confirmedOrder: [],
  },
}

// Function reductora
export function takeMyOrderReducer(state = initialState, action) {
  let newItems = state.order.items;
  switch (action.type) {
    case ADD_ITEM_TO_ORDER:
        console.log("payload addItem:", action.payload);
      newItems = [...newItems, action.payload]
      console.log({newItems})
      return {
        ...state,
        order: {
          items: newItems
        }
      };
    case DELETE_ITEM_FROM_ORDER:
      const index = newItems.findIndex((item) => item.id === action.payload.id );
      console.log("payload deleteItem:", action.payload);
      if(index >= 0) {
        newItems = newItems.slice(0, index).concat(newItems.slice(index + 1));
      }
      console.log({index, newItems})
      return {
        ...state,
        order: {
          items: newItems
        }
      };
    case SHOW_ITEMS:
      console.log('action.items', action.items);
      return {
        ...state,
        itemsList: action.items
      }
    case CONFIRM_ORDER:
      console.log("payload confirmedOrder:", action.payload);
      return {
        ...state,
        order: {
          items: [],
          confirmedOrder: action.payload
        }
      }
    default:
      return state;
  }
}
