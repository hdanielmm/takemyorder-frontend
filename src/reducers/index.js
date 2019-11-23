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
  switch (action.type) {
    case ADD_ITEM_TO_ORDER:
      const newItems = [...state.order.items, action.payload]
      return {
        ...state,
        order: {
          items: newItems
        }
      };
    case DELETE_ITEM_FROM_ORDER:
      const oldItems = state.order.items.filter(i => i.id !== action.payload.id);
      console.log('payload', action.payload.id)
      return {
        ...state,
        order: {
          items: oldItems
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
