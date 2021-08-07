import {
  SET_ELEMENT,
  SET_ELEMENT_BETWEEN,
  SET_BUN,
  DELETE_ELEMENT,
  CLEAR_CONSTRUCTOR
} from "../actions/constructor";
import { TConstructorActions } from "../actions/ingredients"

export type TConstructorState = {
  elements: TIngredient[],
  bun: TIngredient | null
  }

const initialState: TConstructorState = {
  elements: [],
  bun: null
  };

export const burgerConstructorReducer = (state = initialState, action: TConstructorActions) => {
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
	case CLEAR_CONSTRUCTOR: {
      return {
        ...state,
        elements: [],
		bun: null
      };
    }

    default: {
      return state;
    }
  }
};