import { applyMiddleware, compose, createStore } from 'redux';
import {reducer} from './reducers';
import logger from 'redux-logger';

// middleware
let finalCreateStore = compose(
  applyMiddleware(logger())
)(createStore);

export function configureStore(initialState = { todos: [] }){
  return finalCreateStore(reducer, initialState);
}
