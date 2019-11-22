export const ADD_ITEM_TO_ORDER = 'ADD_ITEM_TO_ORDER';

export const addItem = item => {
  return {
    type: ADD_ITEM_TO_ORDER,
    payload: item
  };
};