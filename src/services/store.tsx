import { applyMiddleware, createStore, compose } from 'redux';
import { rootReducer } from './reducers/index';
import { socketMiddleware } from './ws-middleware';
import thunkMiddleware from 'redux-thunk';



const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const wsUrl: string = 'wss://norma.nomoreparties.space/orders/all';
const wsMyUrl: string = 'wss://norma.nomoreparties.space/orders';



export const initStore = (initialState = {}) =>
  createStore(
    rootReducer,
    initialState,
    composeEnhancers(applyMiddleware(thunkMiddleware,socketMiddleware(wsUrl,wsMyUrl)))
  );
