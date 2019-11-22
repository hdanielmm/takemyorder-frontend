// import { getItems } from '../utils/api';

// export const AGREGAR_A_PEDIDO = 'AGREGAR_A_PEDIDO';
export const DELETE_ITEM_FROM_ORDER = 'DELETE_ITEM_FROM_ORDER';
// export const MOSTRAR_ITEMS = 'MOSTRAR_ITEMS';

// export const loadItems = () => {
//   return dispatch => {
//     getItems()
//       .then(response => {
//         dispatch({
//           type: MOSTRAR_ITEMS,
//           items: response.data,
//         });
//       })
//       .catch(error => console.log(error));
//   };
// };

// export const agregarItem = item => {
//   return {
//     type: AGREGAR_A_PEDIDO,
//     payload: item
//   };
// };

export const borrarItem = item => {
  return {
    type: DELETE_ITEM_FROM_ORDER
  }
}