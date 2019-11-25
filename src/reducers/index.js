import { DELETE_ITEM_FROM_ORDER } from '../actions/deleteItem';
import { ADD_ITEM_TO_ORDER } from '../actions/addItem';
import { SHOW_ITEMS } from '../actions/loadItems';

const initialState = {
  itemsList: [],
  order: {
    items: []
  },
}

// Function reductora
export function takeMyOrderReducer(state = initialState, action) {
  let newItems = state.order.items;
  switch (action.type) {
    case ADD_ITEM_TO_ORDER:
      newItems = [...state.order.items, action.payload]
      console.log({newItems})
      return {
        ...state,
        order: {
          items: newItems
        }
      };
    case DELETE_ITEM_FROM_ORDER:
      const index = state.order.items.findIndex((item) => item.id === action.payload.id );
      newItems.splice(index, 1);
      console.log({index, newItems})
      return {
        ...state,
        order: {
          items: newItems
        }
      };
    case SHOW_ITEMS:
      return {
        ...state,
        itemsList: action.items
      }
    default:
      return state;
  }
}
