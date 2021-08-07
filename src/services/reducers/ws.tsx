import {
  WS_CONNECTION_START,
  WS_CONNECTION_SUCCESS,
  WS_CONNECTION_ERROR,
  WS_CONNECTION_CLOSED,
  WS_GET_ORDER,
  WS_GET_MY_ORDER,
  WS_CONNECTION_MY_CLOSED,
  WS_CONNECTION_MY_SUCCESS,
  WS_CONNECTION_MY_START,
  WS_CONNECTION_MY_ERROR
} from "../actions/ws";
import { TWSActions } from "../actions/ws"
import { TOrder } from "../types"

export type TWSState = {
    wsConnected: boolean,
	wsMyConnected:boolean,
    orders: TOrder[],
	myOrders: TOrder[],
    error: string,
	myError: string
}

const initialState: TWSState = {
    wsConnected: false,
	wsMyConnected:false,
    orders: [],
	myOrders:[],
    error: '',
	myError: ''
}; 

export const wsReducer = (state = initialState, action: TWSActions) => {
  switch (action.type) {

    case WS_CONNECTION_SUCCESS:
      return {
        ...state,
                error: null,
        wsConnected: true
      };

    case WS_CONNECTION_ERROR:
      return {
        ...state,
                error: action.payload,
        wsConnected: false
      };

    case WS_CONNECTION_CLOSED:
      return {
        ...state,
                error: null,
        wsConnected: false
      };

    case WS_GET_ORDER:
      return {
        ...state,
                error: null,
        orders: action.payload
      };
	  
	      case WS_CONNECTION_MY_SUCCESS:
      return {
        ...state,
                myError: null,
        wsMyConnected: true
      };

    case WS_CONNECTION_MY_ERROR:
      return {
        ...state,
                myError: action.payload,
        wsMyConnected: false
      };

    case WS_CONNECTION_MY_CLOSED:
      return {
        ...state,
                myError: null,
        wsMyConnected: false
      };

    case WS_GET_MY_ORDER:
      return {
        ...state,
                myError: null,
        myOrders: action.payload
      };
    default:
      return state;
  }
}; 