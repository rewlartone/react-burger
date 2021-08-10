import {
  CLOSE,
  ORDER_DETAILS,
  GET_ORDER_REQUEST,
  GET_ORDER_SUCCESS,
  GET_ORDER_FAILED
} from '../actions/modal';
import { TModalActions } from "../actions/modal";

export type TModalState = {
  order: boolean,
  orderRequest: boolean,
  orderFailed: boolean,
  orderId: number | null
}

const initialState: TModalState = {
  order: false,
  orderRequest: false,
  orderFailed: false,
  orderId: null
};

export const modalReducer = (state = initialState, action: TModalActions) => {
  switch (action.type) {

    case CLOSE: {
      return { ...state, order: false };
    }
	case ORDER_DETAILS: {
      return { ...state, order: true };
    }
case GET_ORDER_REQUEST: {
      return { ...state, orderRequest: true, orderFailed: false, orderId: null };
    }
	case GET_ORDER_SUCCESS: {
      return { ...state, orderRequest: false, orderFailed: false,  orderId: action.num };
    }
	case GET_ORDER_FAILED: {
      return { ...state, orderRequest: false, orderFailed: true };
    }
    default: {
      return state;
    }
  }
};
