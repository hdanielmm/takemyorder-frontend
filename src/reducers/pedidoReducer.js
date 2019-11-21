// Acciones
export const ADD = 'ADD';
export const DELETE = 'DELETE';

export function add(dispatch) {
  return dispatch({
    type: ADD
  });
}

const initialState = {
  cantidad: 0,
}

// Function reductora
export function pedidoReducer(state = initialState, action) {
  switch (action.type) {
    case ADD:
      return {
        ...state,
        cantidad: state.cantidad + 1
      };
    case DELETE:
      return {
        ...state,
        cantidad: state.cantidad - 1
      };
    default:
      return state;
  }
}

