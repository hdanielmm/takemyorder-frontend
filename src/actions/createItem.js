import { createItem } from '../utils/api';

export const CREATE_ITEM = 'CREATE_ITEM';

export const createItem2 = (name, price, image) => createItem({name, price, image})
  .then(response => {
    console.log(response);
  })
  .catch(error => console.log(error));
