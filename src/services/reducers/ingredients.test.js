import { ingredientsReducer as reducer } from "./ingredients.tsx";
import * as types from "../actions/ingredients.tsx";
const state = {
  ingredients: [],
  ingredientsRequest: false,
  ingredientsFailed: false
};

describe("modal reducer", () => {
  it("should return the initial state", () => {
    expect(reducer(undefined, {})).toEqual(state);
  });

  it("should handle GET_INGREDIENTS_REQUEST", () => {
    const expectedState = { ...state, ingredientsRequest: true };
    expect(
      reducer(state, {
        type: types.GET_INGREDIENTS_REQUEST,
      })
    ).toEqual(expectedState);
  });

  it("should handle GET_INGREDIENTS_SUCCESS", () => {
    const initialState = { ...state, ingredientsRequest: true };
    const expectedState = {
      ...state,
      ingredientsFailed: false,
      ingredients: [{ id: 1 }, { id: 2 }],
      ingredientsRequest: false,
    };
    expect(
      reducer(initialState, {
        type: types.GET_INGREDIENTS_SUCCESS,
        ingredients: [{ id: 1 }, { id: 2 }],
      })
    ).toEqual(expectedState);
  });

  it("should handle GET_INGREDIENTS_FAILED", () => {
    const initialState = {
      ...state,
      ingredientsFailed: false,
      ingredientsRequest: true,
    };
    const expectedState = {
      ...state,
      ingredientsFailed: true,
      ingredientsRequest: false,
    };
    expect(
      reducer(initialState, {
        type: types.GET_INGREDIENTS_FAILED,
      })
    ).toEqual(expectedState);
  });
});
