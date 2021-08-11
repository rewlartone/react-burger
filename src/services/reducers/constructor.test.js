import { burgerConstructorReducer as reducer } from "./constructor.tsx";
import * as types from "../actions/constructor.tsx";
const state = {
  elements: [],
  bun: null,
};

describe("modal reducer", () => {
  it("should return the initial state", () => {
    expect(reducer(undefined, {})).toEqual(state);
  });

  it("should handle SET_ELEMENT", () => {
    const initialState = { ...state, elements: [{ id: 1 }] };
    const expectedState = { ...state, elements: [{ id: 1 }, { id: 2 }] };
    expect(
      reducer(initialState, {
        type: types.SET_ELEMENT,
        element: { id: 2 },
      })
    ).toEqual(expectedState);
  });

  it("should handle SET_ELEMENT_BETWEEN", () => {
    const initialState = { ...state, elements: [{ id: 2 }, { id: 3 }] };
    const expectedState = {
      ...state,
      elements: [{ id: 2 }, { id: 1 }, { id: 3 }],
    };
    expect(
      reducer(initialState, {
        type: types.SET_ELEMENT_BETWEEN,
        index: 1,
        element: { id: 1 },
      })
    ).toEqual(expectedState);
  });

  it("should handle SET_BUN", () => {
    const expectedState = { ...state, bun: { id: 1 } };
    expect(
      reducer(state, {
        type: types.SET_BUN,
        bun: { id: 1 },
      })
    ).toEqual(expectedState);
  });

  it("should handle DELETE_ELEMENT", () => {
    const initialState = {
      ...state,
      elements: [{ id: 2 }, { id: 1 }, { id: 3 }],
    };
    const expectedState = { ...state, elements: [{ id: 2 }, { id: 1 }] };
    expect(
      reducer(initialState, {
        type: types.DELETE_ELEMENT,
        index: 2,
      })
    ).toEqual(expectedState);
  });

  it("should handle CLEAR_CONSTRUCTOR", () => {
    const initialState = {
      ...state,
      elements: [{ id: 2 }, { id: 1 }, { id: 3 }],
      bun: { id: 7 },
    };
    const expectedState = { ...state, bun: null, elements: [] };
    expect(
      reducer(initialState, {
        type: types.CLEAR_CONSTRUCTOR,
      })
    ).toEqual(expectedState);
  });
});
