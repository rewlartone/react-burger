import { modalReducer as reducer } from "./modal.tsx";
import * as types from "../actions/modal.tsx";
const state = {
  order: false,
  orderRequest: false,
  orderFailed: false,
  orderId: null,
};

describe("modal reducer", () => {
  it("should return the initial state", () => {
    expect(reducer(undefined, {})).toEqual(state);
  });

  it("should handle CLOSE", () => {
    const expectedState = { ...state, order: false };
    const initialState = { ...state, order: true };
    expect(
      reducer(initialState, {
        type: types.CLOSE,
      })
    ).toEqual(expectedState);
  });

  it("should handle ORDER_DETAILS", () => {
    const expectedState = { ...state, order: true };

    expect(
      reducer(state, {
        type: types.ORDER_DETAILS,
      })
    ).toEqual(expectedState);
  });

  it("should handle GET_ORDER_REQUEST", () => {
    const expectedState = {
      ...state,
      orderRequest: true,
      orderFailed: false,
      orderId: null,
    };
    expect(
      reducer(state, {
        type: types.GET_ORDER_REQUEST,
      })
    ).toEqual(expectedState);
  });

  it("should handle GET_ORDER_SUCCESS", () => {
    const expectedState = {
      ...state,
      orderRequest: false,
      orderFailed: false,
      orderId: 1221,
    };
    const initialState = { ...state, orderRequest: true, orderId: null };
    expect(
      reducer(initialState, {
        type: types.GET_ORDER_SUCCESS,
        num: 1221,
      })
    ).toEqual(expectedState);
  });

  it("should handle GET_ORDER_FAILED", () => {
    const expectedState = { ...state, orderRequest: false, orderFailed: true };
    const initialState = { ...state, orderRequest: true, orderFailed: false };
    expect(
      reducer(initialState, {
        type: types.GET_ORDER_FAILED,
      })
    ).toEqual(expectedState);
  });
});
