import {
  SET_ITEM,
  CLOSE,
  ORDER_DETAILS,
  GET_ORDER_REQUEST,
  GET_ORDER_SUCCESS,
  GET_ORDER_FAILED
} from '../actions/modal.jsx';

const initialState = {
  item: {},
  visible: false,
  order: false,
  orderRequest: false,
  orderFailed: false,
  orderId: null
};

export const modalReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ITEM: {
      return {
        ...state,
        item: action.item,
		visible: true
      };
    }
    case CLOSE: {
      return { ...state, visible: false, item: {}, order: false };
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
