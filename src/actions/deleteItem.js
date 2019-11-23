export const DELETE_ITEM_FROM_ORDER = 'DELETE_ITEM_FROM_ORDER';

export const deleteItem = item => {
  return {
    type: DELETE_ITEM_FROM_ORDER,
    payload: item
  }
}