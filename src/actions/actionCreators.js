const ADD_TO_COUNT = 'ADD_TO_COUNT';
const DELETE_FROM_COUNT = 'DELETE_FROM_COUNT';

export const addToCount = item => {
  return {
    type: 'ADD_TO_COUNT',
    item
  };
};

export const deleteFromCount = item => {
  return {
    type: 'DELETE_FROM_COUNT'
  }
}