import {
  SET_ELEMENT,
  SET_ELEMENT_BETWEEN,
  SET_BUN,
  DELETE_ELEMENT,
} from "../actions/constructor.jsx";

const initialState = {
  elements: [],
  bun: null,
  isDrag: false,
};

export const burgerConstructorReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ELEMENT: {
      return {
        ...state,
        elements: [...state.elements, action.element],
      };
    }
    case SET_ELEMENT_BETWEEN: {
      return {
        ...state,
        elements: [
          ...state.elements.slice(0, action.index),
          action.element,
          ...state.elements.slice(action.index),
        ],
      };
    }
    case SET_BUN: {
      return { ...state, bun: action.bun };
    }
    case DELETE_ELEMENT: {
      return {
        ...state,
        elements: [
          ...state.elements.slice(0, action.index),
          ...state.elements.slice(action.index + 1),
        ],
      };
    }

    default: {
      return state;
    }
  }
};
