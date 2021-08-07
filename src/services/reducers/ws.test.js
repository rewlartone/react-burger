import { wsReducer as reducer } from "./ws.tsx";
import * as types from "../actions/ws.tsx";
const state = {
  wsConnected: false,
  wsMyConnected: false,
  orders: [],
  myOrders: [],
  error: "",
  myError: "",
};

describe("modal reducer", () => {
  it("should return the initial state", () => {
    expect(reducer(undefined, {})).toEqual(state);
  });

  it("should handle WS_CONNECTION_SUCCESS", () => {
    const expectedState = { ...state, error: null, wsConnected: true };
    expect(
      reducer(state, {
        type: types.WS_CONNECTION_SUCCESS,
      })
    ).toEqual(expectedState);
  });

  it("should handle WS_CONNECTION_ERROR", () => {
    const initialState = { ...state, error: null, wsConnected: true };
    const expectedState = { ...state, error: "error", wsConnected: false };
    expect(
      reducer(initialState, {
        type: types.WS_CONNECTION_ERROR,
        payload: "error",
      })
    ).toEqual(expectedState);
  });

  it("should handle WS_CONNECTION_CLOSED", () => {
    const initialState = { ...state, wsConnected: true };
    const expectedState = { ...state, error: null, wsConnected: false };
    expect(
      reducer(initialState, {
        type: types.WS_CONNECTION_CLOSED,
      })
    ).toEqual(expectedState);
  });

  it("should handle WS_GET_ORDER", () => {
    const expectedState = {
      ...state,
      error: null,
      orders: [{ id: 1 }, { id: 2 }],
    };
    expect(
      reducer(state, {
        type: types.WS_GET_ORDER,
        payload: [{ id: 1 }, { id: 2 }],
      })
    ).toEqual(expectedState);
  });

  it("should handle WS_CONNECTION_CLOSED", () => {
    const initialState = { ...state, wsConnected: true };
    const expectedState = { ...state, error: null, wsConnected: false };
    expect(
      reducer(initialState, {
        type: types.WS_CONNECTION_CLOSED,
      })
    ).toEqual(expectedState);
  });

  it("should handle WS_CONNECTION_MY_SUCCESS", () => {
    const expectedState = { ...state, myError: null, wsMyConnected: true };
    expect(
      reducer(state, {
        type: types.WS_CONNECTION_MY_SUCCESS,
      })
    ).toEqual(expectedState);
  });

  it("should handle WS_CONNECTION_MY_ERROR", () => {
    const initialState = { ...state, myError: null, wsMyConnected: true };
    const expectedState = { ...state, myError: "error", wsMyConnected: false };
    expect(
      reducer(initialState, {
        type: types.WS_CONNECTION_MY_ERROR,
        payload: "error",
      })
    ).toEqual(expectedState);
  });

  it("should handle WS_CONNECTION_MY_CLOSED", () => {
    const initialState = { ...state, wsMyConnected: true };
    const expectedState = { ...state, myError: null, wsMyConnected: false };
    expect(
      reducer(initialState, {
        type: types.WS_CONNECTION_MY_CLOSED,
      })
    ).toEqual(expectedState);
  });

  it("should handle WS_GET_MY_ORDER", () => {
    const expectedState = {
      ...state,
      myError: null,
      myOrders: [{ id: 1 }, { id: 2 }],
    };
    expect(
      reducer(state, {
        type: types.WS_GET_MY_ORDER,
        payload: [{ id: 1 }, { id: 2 }],
      })
    ).toEqual(expectedState);
  });

  it("should handle WS_CONNECTION_MY_CLOSED", () => {
    const initialState = { ...state, wsMyConnected: true };
    const expectedState = { ...state, myError: null, wsMyConnected: false };
    expect(
      reducer(initialState, {
        type: types.WS_CONNECTION_MY_CLOSED,
      })
    ).toEqual(expectedState);
  });
});
