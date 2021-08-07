import { useContext, useState, createContext } from 'react';
import { useDispatch } from "react-redux";
import { registerRequest, userRequest, newTokenRequest, loginRequest, userDataChangeRequest, logOutRequest, forgotPassRequest, resetPassRequest } from "./actions/user";

const AuthContext = createContext(undefined);

export function ProvideAuth({ children }: {children: React.ReactNode}): typeof AuthContext {
  const auth = useProvideAuth();
  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  return useContext(AuthContext);
}

export function useProvideAuth(): {signIn: () => void;
	getUser: () => void;
    register: () => void;
    signOut: () => void;
	setData: () => void;
	forgotPass: () => void;
	resetPass: () => void;
	getNewToken: () => void;
	} {
	
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