import { useContext, createContext } from 'react';
import { useDispatch } from "react-redux";
import { registerRequest, userRequest, newTokenRequest, loginRequest, userDataChangeRequest, logOutRequest, forgotPassRequest, resetPassRequest } from "./actions/user";
  const AuthContext = createContext({
signIn: (form: {email: string; password: string}) => {},
getUser: () => {},
setData: (form: {email: string; name: string}) => {},
getNewToken: () => {},
resetPass: (form: {password: string; token: string}) => {},
signOut: () => {},
forgotPass: (form:  {email: string;}) => {},
register: (form: TForm) => {}});

export function ProvideAuth({ children }: {children: React.ReactNode}): any  {
  const auth = useProvideAuth();
  console.log(auth);
  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  return useContext(AuthContext);
}
type TForm = {email: string; password: string; name: string;};


export function useProvideAuth(): {
  signIn: (form: {email: string; password: string}) => void;
	getUser: () => void;
  register: (form: TForm) => void;
  signOut: () => void;
	setData: (form:  {email: string; name: string}) => void;
	forgotPass: (form: {email: string;}) => void;
	resetPass: (form: {password: string; token: string}) => void;
	getNewToken: () => void;
}{

const dispatch = useDispatch();

   const register = (form: TForm): void => {
    dispatch(registerRequest(form));
};

   const getUser = (): void => {
    dispatch(userRequest());
	  };

	const getNewToken = (): void => {
    dispatch(newTokenRequest());
	  };

	const signIn = (form: {email: string; password: string}): void => {
    dispatch(loginRequest(form));
	  };

	  const setData = (form: {email: string; name: string}): void => {
    dispatch(userDataChangeRequest(form));
	  };

  const signOut = (): void => {
     dispatch(logOutRequest());
  };

    const forgotPass =  (form: {email: string;}): void => {
     dispatch(forgotPassRequest(form));
  };

   const resetPass =  (form: {password: string; token: string}): void => {
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
