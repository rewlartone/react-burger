import { applyMiddleware, createStore, compose } from 'redux';
import { rootReducer } from './reducers/index';
import { socketMiddleware } from './ws-middleware';
import thunkMiddleware from 'redux-thunk';
import {
  WS_CONNECTION_CLOSED,
  WS_CONNECTION_ERROR,
  WS_CONNECTION_START,
  WS_CONNECTION_SUCCESS,
  WS_GET_ORDER
} from './actions/ws';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const wsUrl: string = 'wss://norma.nomoreparties.space/orders/all';
const wsMyUrl: string = 'wss://norma.nomoreparties.space/orders';

const wsActions = {
  wsInit: WS_CONNECTION_START,
  onOpen: WS_CONNECTION_SUCCESS,
  onClose: WS_CONNECTION_CLOSED,
  onError: WS_CONNECTION_ERROR,
  onMessage: WS_GET_ORDER
};

export const initStore = (initialState = {}) =>
  createStore(
    rootReducer,
    initialState,
    composeEnhancers(applyMiddleware(thunkMiddleware,socketMiddleware(wsUrl,wsMyUrl,wsActions))) // Ваш код здесь
  );
