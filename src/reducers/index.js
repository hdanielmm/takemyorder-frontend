const defaultState = {
  nombre: ""
}

const mainReducer = (state=defaultState, action) => {
  if (action.type === 'SHOW_ITEM') {
    return {
      ...state,
      nombre: action.nombre
    }
  } else {
    return {
      ...state
    }
  }
}

export default mainReducer;