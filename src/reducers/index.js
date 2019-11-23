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
      return {
        ...state,
        cantidad: state.cantidad - 1
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
