import { createStore, applyMiddleware } from 'redux'
import { takeMyOrderReducer } from '../reducers/index';
import thunk from 'redux-thunk';

// const rootReducer = combineReducers({
//   pedidoReducer
// });

const logger = store => next => action => {
  console.log('dispatching', action)
  let result = next(action)
  console.log('next state', store.getState())
  return result
}

export const store = createStore(takeMyOrderReducer, applyMiddleware(logger, thunk));