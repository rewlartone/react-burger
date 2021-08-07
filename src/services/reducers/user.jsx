import {
  GET_NEW_TOKEN_REQUEST,
  GET_NEW_TOKEN_SUCCESS,
  GET_NEW_TOKEN_FAILED,
  GET_USER_REQUEST,
  GET_USER_SUCCESS,
  GET_USER_FAILED,
  GET_REGISTER_REQUEST,
  GET_REGISTER_SUCCESS,
  GET_REGISTER_FAILED,
  GET_LOGIN_REQUEST,
  GET_LOGIN_SUCCESS,
  GET_LOGIN_FAILED,
  DATA_CHANGE_REQUEST,
  DATA_CHANGE_SUCCESS,
  DATA_CHANGE_FAILED,
  LOG_OUT_REQUEST,
  LOG_OUT_SUCCESS,
  LOG_OUT_FAILED,
  FORGOT_PASS_REQUEST,
  FORGOT_PASS_SUCCESS,
  FORGOT_PASS_FAILED,
  RESET_PASS_REQUEST,
  RESET_PASS_SUCCESS,
  RESET_PASS_FAILED
} from "../actions/user.jsx";

const initialState = {
  user: {email:'',name:''},
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
  forgotPassSuccess:false,
  resetPassRequest: false,
  resetPassFailed: false,
  resetPassSuccess:false
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_NEW_TOKEN_REQUEST: {
      return {
        ...state,
         newTokenRequest: true,
      };
    }
    case GET_NEW_TOKEN_SUCCESS: {
      return {
        ...state,
         newTokenFailed: false,
         newTokenRequest: false
      };
    }
    case GET_NEW_TOKEN_FAILED: {
      return { ...state,  newTokenFailed: true,  newTokenRequest: false };
    }
    case GET_USER_REQUEST: {
      return {
        ...state,
         userRequest: true,
      };
    }
    case GET_USER_SUCCESS: {
      return {
        ...state,
         userFailed: false,
         userRequest: false,
		 user: {email: action.data.email, name:action.data.name}
      };
    }
    case GET_USER_FAILED: {
      return { ...state,  registerFailed: true,  registerRequest: false };
    }
	    case GET_REGISTER_REQUEST: {
      return {
        ...state,
         registerRequest: true,
      };
    }
    case GET_REGISTER_SUCCESS: {
      return {
        ...state,
         registerFailed: false,
         registerRequest: false
      };
    }
    case GET_REGISTER_FAILED: {
      return { ...state,  registerFailed: true,  registerRequest: false };
    }
		    case GET_LOGIN_REQUEST: {
      return {
        ...state,
         loginRequest: true,
      };
    }
    case GET_LOGIN_SUCCESS: {
      return {
        ...state,
         loginFailed: false,
         loginRequest: false,
		  user: {email: action.data.email, name:action.data.name}
      };
    }
    case GET_LOGIN_FAILED: {
      return { ...state,  loginFailed: true,  loginRequest: false };
    }
		    case DATA_CHANGE_REQUEST: {
      return {
        ...state,
         dataChangeRequest: true,
      };
    }
    case DATA_CHANGE_SUCCESS: {
      return {
        ...state,
         dataChangeFailed: false,
         dataChangeRequest: false,
		 user: {email: action.data.email, name:action.data.name}
      };
    }
    case DATA_CHANGE_FAILED: {
      return { ...state,  dataChangeFailed: true,  dataChangeRequest: false };
    }
		    case LOG_OUT_REQUEST: {
      return {
        ...state,
         logOutRequest: true,
      };
    }
    case LOG_OUT_SUCCESS: {
      return {
        ...state,
         logOutFailed: false,
         logOutRequest: false,
		 user: {email: '', name: ''}
      };
    }
    case LOG_OUT_FAILED: {
      return { ...state,  logOutFailed: true,  logOutRequest: false };
    }
	 case FORGOT_PASS_REQUEST: {
      return {
        ...state,
         forgotPassRequest: true,
		 resetPassSuccess: false
      };
    }
    case FORGOT_PASS_SUCCESS: {
      return {
        ...state,
         forgotPassFailed: false,
         forgotPassRequest: false,
		 forgotPassSuccess:true
      };
    }
    case FORGOT_PASS_FAILED: {
      return { ...state,  forgotPassFailed: true,  forgotPassRequest: false };
    }
		 case RESET_PASS_REQUEST: {
      return {
        ...state,
         resetPassRequest: true
      };
    }
    case RESET_PASS_SUCCESS: {
      return {
        ...state,
         resetPassFailed: false,
		 resetPassSuccess:true,
		 forgotPassSuccess:false,
         resetPassRequest: false
      };
    }
    case RESET_PASS_FAILED: {
      return { ...state,  resetPassFailed: true,  resetPassRequest: false };
    }
    default: {
      return state;
    }
  }
};

