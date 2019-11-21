import axios from 'axios';

export function loadItems() {
  return (dispatch) => {
    return axios.get('https://takemyorder-backend.herokuapp.com/items')
      .then(response => {
        dispatch(showItem(response.data.nombre));
      });
  }
};

export function showItem(color) {
  return {
    type: 'SHOW_ITEM',
    color
  }
}