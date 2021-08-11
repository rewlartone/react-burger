import { userReducer as reducer } from "./user.tsx";
import * as types from "../actions/user.tsx";
const state = {
  user: { email: "", name: "" },
  userRequest: false,
  userFailed: false,
  registerRequest: false,
  registerFailed: false,
  newTokenRequest: false,
  newTokenFailed: false,
  loginRequest: false,
  loginFailed: false,
  dataChangeRequest: false,
  dataChangeFailed: false,
  logOutRequest: false,
  logOutFailed: false,
  forgotPassRequest: false,
  forgotPassFailed: false,
  forgotPassSuccess: false,
  resetPassRequest: false,
  resetPassFailed: false,
  resetPassSuccess: false,
};

describe("modal reducer", () => {
  it("should return the initial state", () => {
    expect(reducer(undefined, {})).toEqual(state);
  });

  it("should handle GET_NEW_TOKEN_REQUEST", () => {
    const expectedState = { ...state, newTokenRequest: true };
    expect(
      reducer(state, {
        type: types.GET_NEW_TOKEN_REQUEST,
      })
    ).toEqual(expectedState);
  });

  it("should handle GET_NEW_TOKEN_SUCCESS", () => {
    const initialState = { ...state, newTokenRequest: true };
    const expectedState = {
      ...state,
      newTokenFailed: false,
      newTokenRequest: false,
    };
    expect(
      reducer(initialState, {
        type: types.GET_NEW_TOKEN_SUCCESS,
      })
    ).toEqual(expectedState);
  });

  it("should handle GET_NEW_TOKEN_FAILED", () => {
    const initialState = { ...state, newTokenRequest: true };
    const expectedState = {
      ...state,
      newTokenFailed: true,
      newTokenRequest: false,
    };
    expect(
      reducer(initialState, {
        type: types.GET_NEW_TOKEN_FAILED,
      })
    ).toEqual(expectedState);
  });

  it("should handle GET_REGISTER_REQUEST", () => {
    const expectedState = { ...state, registerRequest: true };
    expect(
      reducer(state, {
        type: types.GET_REGISTER_REQUEST,
      })
    ).toEqual(expectedState);
  });

  it("should handle GET_REGISTER_SUCCESS", () => {
    const initialState = { ...state, registerRequest: true };
    const expectedState = {
      ...state,
      registerFailed: false,
      registerRequest: false,
    };
    expect(
      reducer(initialState, {
        type: types.GET_REGISTER_SUCCESS,
      })
    ).toEqual(expectedState);
  });

  it("should handle GET_REGISTER_FAILED", () => {
    const initialState = { ...state, registerRequest: true };
    const expectedState = {
      ...state,
      registerFailed: true,
      registerRequest: false,
    };
    expect(
      reducer(initialState, {
        type: types.GET_REGISTER_FAILED,
      })
    ).toEqual(expectedState);
  });

  it("should handle GET_LOGIN_REQUEST", () => {
    const expectedState = { ...state, loginRequest: true };
    expect(
      reducer(state, {
        type: types.GET_LOGIN_REQUEST,
      })
    ).toEqual(expectedState);
  });

  it("should handle GET_LOGIN_SUCCESS", () => {
    const initialState = { ...state, loginRequest: true };
    const expectedState = {
      ...state,
      loginFailed: false,
      loginRequest: false,
      user: { email: "test@yandex.ru", name: "Sas" },
    };
    expect(
      reducer(initialState, {
        type: types.GET_LOGIN_SUCCESS,
        data: { email: "test@yandex.ru", name: "Sas" },
      })
    ).toEqual(expectedState);
  });

  it("should handle GET_LOGIN_FAILED", () => {
    const initialState = { ...state, loginRequest: true };
    const expectedState = { ...state, loginFailed: true, loginRequest: false };
    expect(
      reducer(initialState, {
        type: types.GET_LOGIN_FAILED,
      })
    ).toEqual(expectedState);
  });

  it("should handle DATA_CHANGE_REQUEST", () => {
    const expectedState = { ...state, dataChangeRequest: true };
    expect(
      reducer(state, {
        type: types.DATA_CHANGE_REQUEST,
      })
    ).toEqual(expectedState);
  });

  it("should handle DATA_CHANGE_SUCCESS", () => {
    const initialState = { ...state, dataChangeRequest: true };
    const expectedState = {
      ...state,
      dataChangeFailed: false,
      dataChangeRequest: false,
      user: { email: "test@yandex.ru", name: "Sas" },
    };
    expect(
      reducer(initialState, {
        type: types.DATA_CHANGE_SUCCESS,
        data: { email: "test@yandex.ru", name: "Sas" },
      })
    ).toEqual(expectedState);
  });

  it("should handle DATA_CHANGE_FAILED", () => {
    const initialState = { ...state, dataChangeRequest: true };
    const expectedState = {
      ...state,
      dataChangeFailed: true,
      dataChangeRequest: false,
    };
    expect(
      reducer(initialState, {
        type: types.DATA_CHANGE_FAILED,
      })
    ).toEqual(expectedState);
  });

  it("should handle LOG_OUT_REQUEST", () => {
    const expectedState = { ...state, logOutRequest: true };
    expect(
      reducer(state, {
        type: types.LOG_OUT_REQUEST,
      })
    ).toEqual(expectedState);
  });

  it("should handle LOG_OUT_SUCCESS", () => {
    const initialState = {
      ...state,
      logOutRequest: true,
      user: { email: "test@yandex.ru", name: "Sas" },
    };
    const expectedState = {
      ...state,
      logOutFailed: false,
      logOutRequest: false,
      user: { email: "", name: "" },
    };
    expect(
      reducer(initialState, {
        type: types.LOG_OUT_SUCCESS,
      })
    ).toEqual(expectedState);
  });

  it("should handle LOG_OUT_FAILED", () => {
    const initialState = { ...state, logOutRequest: true };
    const expectedState = {
      ...state,
      logOutFailed: true,
      logOutRequest: false,
    };
    expect(
      reducer(initialState, {
        type: types.LOG_OUT_FAILED,
      })
    ).toEqual(expectedState);
  });

  it("should handle FORGOT_PASS_REQUEST", () => {
    const initialState = { ...state, resetPassSuccess: true };
    const expectedState = {
      ...state,
      forgotPassRequest: true,
      resetPassSuccess: false,
    };
    expect(
      reducer(initialState, {
        type: types.FORGOT_PASS_REQUEST,
      })
    ).toEqual(expectedState);
  });

  it("should handle FORGOT_PASS_SUCCESS", () => {
    const initialState = { ...state, forgotPassRequest: true };
    const expectedState = {
      ...state,
      forgotPassFailed: false,
      forgotPassRequest: false,
      forgotPassSuccess: true,
    };
    expect(
      reducer(initialState, {
        type: types.FORGOT_PASS_SUCCESS,
      })
    ).toEqual(expectedState);
  });

  it("should handle FORGOT_PASS_FAILED", () => {
    const initialState = { ...state, forgotPassRequest: true };
    const expectedState = {
      ...state,
      forgotPassFailed: true,
      forgotPassRequest: false,
    };
    expect(
      reducer(initialState, {
        type: types.FORGOT_PASS_FAILED,
      })
    ).toEqual(expectedState);
  });

  it("should handle RESET_PASS_REQUEST", () => {
    const expectedState = { ...state, resetPassRequest: true };
    expect(
      reducer(state, {
        type: types.RESET_PASS_REQUEST,
      })
    ).toEqual(expectedState);
  });

  it("should handle RESET_PASS_SUCCESS", () => {
    const initialState = {
      ...state,
      forgotPassSuccess: true,
      resetPassRequest: true,
    };
    const expectedState = {
      ...state,
      resetPassFailed: false,
      resetPassSuccess: true,
      forgotPassSuccess: false,
      resetPassRequest: false,
    };
    expect(
      reducer(initialState, {
        type: types.RESET_PASS_SUCCESS,
      })
    ).toEqual(expectedState);
  });

  it("should handle RESET_PASS_FAILED", () => {
    const initialState = { ...state, resetPassRequest: true };
    const expectedState = {
      ...state,
      resetPassFailed: true,
      resetPassRequest: false,
    };
    expect(
      reducer(initialState, {
        type: types.RESET_PASS_FAILED,
      })
    ).toEqual(expectedState);
  });

  it("should handle GET_USER_REQUEST", () => {
    const expectedState = { ...state, userRequest: true };
    expect(
      reducer(state, {
        type: types.GET_USER_REQUEST,
      })
    ).toEqual(expectedState);
  });

  it("should handle GET_USER_SUCCESS", () => {
    const initialState = { ...state, userRequest: true };
    const expectedState = {
      ...state,
      userFailed: false,
      userRequest: false,
      user: { email: "test@yandex.ru", name: "Sas" },
    };
    expect(
      reducer(initialState, {
        type: types.GET_USER_SUCCESS,
        data: { email: "test@yandex.ru", name: "Sas" },
      })
    ).toEqual(expectedState);
  });

  it("should handle GET_USER_FAILED", () => {
    const initialState = { ...state, userRequest: true };
    const expectedState = { ...state, userFailed: true, userRequest: false };
    expect(
      reducer(initialState, {
        type: types.GET_USER_FAILED,
      })
    ).toEqual(expectedState);
  });
});
