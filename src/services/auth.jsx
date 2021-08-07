import { useContext, useState, createContext } from 'react';
import { useDispatch } from "react-redux";
import { registerRequest, userRequest, newTokenRequest, loginRequest, userDataChangeRequest, logOutRequest, forgotPassRequest, resetPassRequest } from "./actions/user.jsx";

const AuthContext = createContext(undefined);

export function ProvideAuth({ children }) {
  const auth = useProvideAuth();
  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  return useContext(AuthContext);
}

export function useProvideAuth() {
	
const dispatch = useDispatch();

   const register = form => {
    dispatch(registerRequest(form));
};
  
   const getUser = () => {
    dispatch(userRequest());
	  };
	  
	const getNewToken = () => {
    dispatch(newTokenRequest());
	  };
	  
	const signIn = form => {
    dispatch(loginRequest(form));
	  };
	  
	  const setData = form => {
    dispatch(userDataChangeRequest(form));
	  };

  const signOut = () => {
     dispatch(logOutRequest());
  };
  
    const forgotPass = (form) => {
     dispatch(forgotPassRequest(form));
  };
  
   const resetPass = (form) => {
     dispatch(resetPassRequest(form));
  };

  return {
	signIn,
	getUser,
    register,
    signOut,
	setData,
	forgotPass,
	resetPass,
	getNewToken
  };
}


export function setCookie(name, value, props) {
  props = props || {};
  let exp = props.expires;
  if (typeof exp == 'number' && exp) {
    const d = new Date();
    d.setTime(d.getTime() + exp * 1000);
    exp = props.expires = d;
  }
  if (exp && exp.toUTCString) {
    props.expires = exp.toUTCString();
  }
  value = encodeURIComponent(value);
  let updatedCookie = name + '=' + value;
  for (const propName in props) {
    updatedCookie += '; ' + propName;
    const propValue = props[propName];
    if (propValue !== true) {
      updatedCookie += '=' + propValue;
    }
  }
  document.cookie = updatedCookie;
} 

export function getCookie(name) {
  const matches = document.cookie.match(
    new RegExp('(?:^|; )' + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + '=([^;]*)')
  );
  return matches ? decodeURIComponent(matches[1]) : undefined;
} 

export function deleteCookie(name) {
  setCookie(name, null, { expires: -1 });
} 
