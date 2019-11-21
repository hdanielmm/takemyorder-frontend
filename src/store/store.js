import { createStore, combineReducers } from 'redux'
import { pedidoReducer } from '../reducers/pedidoReducer';

const rootReducer = combineReducers({
  pedidoReducer
});

export const store = createStore(rootReducer);