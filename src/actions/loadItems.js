import { getItems } from '../utils/api';

export const SHOW_ITEMS = 'SHOW_ITEMS';

export const loadItems = () => {
  return dispatch => {
    getItems()
      .then(response => {
        dispatch({
          type: SHOW_ITEMS,
          items: response.data,
        });
      })
      .catch(error => console.log(error));
  };
};