import { setCookie, getCookie, deleteCookie } from "../auth.jsx"

export const GET_NEW_TOKEN_REQUEST = "GET_NEW_TOKEN_REQUEST";
export const GET_NEW_TOKEN_SUCCESS = "GET_NEW_TOKEN_SUCCESS";
export const GET_NEW_TOKEN_FAILED = "GET_NEW_TOKEN_FAILED";
export const GET_USER_REQUEST = "GET_USER_REQUEST";
export const GET_USER_SUCCESS = "GET_USER_SUCCESS";
export const GET_USER_FAILED = "GET_USER_FAILED";
export const GET_REGISTER_REQUEST = "GET_REGISTER_REQUEST";
export const GET_REGISTER_SUCCESS = "GET_REGISTER_SUCCESS";
export const GET_REGISTER_FAILED = "GET_REGISTER_FAILED";
export const GET_LOGIN_REQUEST = "GET_LOGIN_REQUEST";
export const GET_LOGIN_SUCCESS = "GET_LOGIN_SUCCESS";
export const GET_LOGIN_FAILED = "GET_LOGIN_FAILED";
export const DATA_CHANGE_SUCCESS = "DATA_CHANGE_SUCCESS";
export const DATA_CHANGE_REQUEST = "DATA_CHANGE_REQUEST";
export const DATA_CHANGE_FAILED = "DATA_CHANGE_FAILED";
export const LOG_OUT_SUCCESS = "LOG_OUT_SUCCESS";
export const LOG_OUT_REQUEST = "LOG_OUT_REQUEST";
export const LOG_OUT_FAILED = "LOG_OUT_FAILED";
export const FORGOT_PASS_SUCCESS = "FORGOT_PASS_SUCCESS";
export const FORGOT_PASS_REQUEST = "FORGOT_PASS_REQUEST";
export const FORGOT_PASS_FAILED = "FORGOT_PASS_FAILED";
export const RESET_PASS_SUCCESS = "RESET_PASS_SUCCESS";
export const RESET_PASS_REQUEST = "RESET_PASS_REQUEST";
export const RESET_PASS_FAILED = "RESET_PASS_FAILED";


export function registerRequest(form) {
	  return async function (dispatch) {
    try {
      dispatch({
        type: GET_REGISTER_REQUEST,
      });
      const res = await fetch('https://norma.nomoreparties.space/api/auth/register', {
    method: 'POST',
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json'
    },
    redirect: 'follow',
    referrerPolicy: 'no-referrer',
    body: JSON.stringify(form)
  });
      if (!res.ok) {
		dispatch({
          type: GET_REGISTER_FAILED,
        });
        throw new Error("Ответ сети не ok");
      }
      let dataFetch = await res.json();
      dispatch({
        type: GET_REGISTER_SUCCESS
      });
	  if(dataFetch.success){
	  if(dataFetch.accessToken){
		   const accessToken = dataFetch.accessToken.split('Bearer ')[1];
		 setCookie('accessToken', accessToken);  
	  }
	  if(dataFetch.refreshToken){
		 setCookie('refreshToken', dataFetch.refreshToken);  
	  }
}
    } catch (e) {
      console.log("Проблема с fetch запросом: ", e.message);
      dispatch({
        type: GET_REGISTER_FAILED,
      });
    }
  }; 
}

export function loginRequest(form) {
   return async function (dispatch) {
    try {
      dispatch({
        type: GET_LOGIN_REQUEST,
      });
      const res = await fetch(' https://norma.nomoreparties.space/api/auth/login', {
    method: 'POST',
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json'
    },
    redirect: 'follow',
    referrerPolicy: 'no-referrer',
	body: JSON.stringify(form)
  });
      if (!res.ok) {
		dispatch({
          type: GET_LOGIN_FAILED,
        });
        throw new Error("Ответ сети не ok");
      }
      let dataFetch = await res.json();
	  	  if(dataFetch.success){
			        dispatch({
        type: GET_LOGIN_SUCCESS,
		data: dataFetch.user
      });
	  if(dataFetch.accessToken){
		   const accessToken = dataFetch.accessToken.split('Bearer ')[1];
		 setCookie('accessToken', accessToken);  
	  }
	  if(dataFetch.refreshToken){
		 setCookie('refreshToken', dataFetch.refreshToken);  
	  }
}
    } catch (e) {
      console.log("Проблема с fetch запросом: ", e.message);
      dispatch({
        type: GET_LOGIN_FAILED,
      });
    }
  };
}

export function userRequest() {
   return async function (dispatch) {
    try {
      dispatch({
        type: GET_USER_REQUEST,
      });
      const res = await fetch('https://norma.nomoreparties.space/api/auth/user', {
    method: 'GET',
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json',
	  Authorization: 'Bearer ' + getCookie("accessToken")

    },
    redirect: 'follow',
    referrerPolicy: 'no-referrer'	
  });

      if (!res.ok) {
		dispatch({
          type: GET_USER_FAILED,
        });
	let dataFetch = await res.json();
	console.log(dataFetch);	
	 if(dataFetch.message === "jwt expired" && getCookie('refreshToken')){
		await dispatch(newTokenRequest());
		 await dispatch(userRequest());
	 }
        throw new Error("Ответ сети не ok");
      }
      let dataFetch = await res.json();
	 console.log(dataFetch);
      dispatch({
        type: GET_USER_SUCCESS,
		data: dataFetch.user
      });
    } catch (e) {
      console.log("Проблема с fetch запросом: ", e.message);
      dispatch({
        type: GET_USER_FAILED,
      });
    }
  };
}
export function userDataChangeRequest(form) {
   return async function (dispatch) {
    try {
      dispatch({
        type: DATA_CHANGE_REQUEST,
      });
      const res = await fetch('https://norma.nomoreparties.space/api/auth/user', {
    method: 'PATCH',
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json',
	  Authorization: 'Bearer ' + getCookie("accessToken")

    },
    redirect: 'follow',
    referrerPolicy: 'no-referrer',
	body: JSON.stringify(form)
  });
      if (!res.ok) {
		dispatch({
          type: DATA_CHANGE_FAILED,
        });
		let dataFetch = await res.json();
	 if(dataFetch.message === "jwt expired" && getCookie('refreshToken')){
		 await dispatch(newTokenRequest());
		 await dispatch(userDataChangeRequest(form));
	 }
        throw new Error("Ответ сети не ok");
      }
      let dataFetch = await res.json();
	        dispatch({
        type: DATA_CHANGE_SUCCESS,
		data: dataFetch.user
      });
    } catch (e) {
      console.log("Проблема с fetch запросом: ", e.message);
      dispatch({
        type: DATA_CHANGE_FAILED,
      });
    }
  };
}
export function newTokenRequest() {
   return async function (dispatch) {
	   if(getCookie('refreshToken')){
    try {
      dispatch({
        type: GET_NEW_TOKEN_REQUEST,
      });
      const res = await fetch('https://norma.nomoreparties.space/api/auth/token', {
    method: 'POST',
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json'
    },
    redirect: 'follow',
    referrerPolicy: 'no-referrer',
	body: JSON.stringify({token: getCookie('refreshToken')})	
  });
      if (!res.ok) {
		  console.log(res);
		dispatch({
          type: GET_NEW_TOKEN_FAILED,
        });
        throw new Error("Ответ сети не ok");
      }
      let dataFetch = await res.json();
	  if(dataFetch.success){
		        dispatch({
        type: GET_NEW_TOKEN_SUCCESS
      });
	  if(dataFetch.accessToken){
		   const accessToken = dataFetch.accessToken.split('Bearer ')[1];
		 setCookie('accessToken', accessToken);  
	  }
	  if(dataFetch.refreshToken){
		 setCookie('refreshToken', dataFetch.refreshToken);  
	  }
}
    } catch (e) {
      console.log("Проблема с fetch запросом: ", e.message);
      dispatch({
        type: GET_NEW_TOKEN_FAILED,
      });
    }
  }
  }  
}

export function logOutRequest() {
   return async function (dispatch) {
	   if(getCookie('refreshToken')){
    try {
      dispatch({
        type: LOG_OUT_REQUEST,
      });
      const res = await fetch('https://norma.nomoreparties.space/api/auth/logout', {
    method: 'POST',
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json'
    },
    redirect: 'follow',
    referrerPolicy: 'no-referrer',
	body: JSON.stringify({token: getCookie('refreshToken')})	
  });
      if (!res.ok) {
		dispatch({
          type: LOG_OUT_FAILED,
        });
        throw new Error("Ответ сети не ok");
      }
      let dataFetch = await res.json();
	  if(dataFetch.success){
	  dispatch({
        type: LOG_OUT_SUCCESS
      });
	  deleteCookie("refreshToken");
	  deleteCookie("accessToken");
}
    } catch (e) {
      console.log("Проблема с fetch запросом: ", e.message);
      dispatch({
        type: LOG_OUT_FAILED,
      });
    }
  }
  }  
}

export function forgotPassRequest(form) {
   return async function (dispatch) {
    try {
      dispatch({
        type: FORGOT_PASS_REQUEST,
      });
      const res = await fetch('https://norma.nomoreparties.space/api/password-reset', {
    method: 'POST',
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json'
    },
    redirect: 'follow',
    referrerPolicy: 'no-referrer',
	body: JSON.stringify(form)	
  });
      if (!res.ok) {
		dispatch({
          type: FORGOT_PASS_FAILED,
        });
        throw new Error("Ответ сети не ok");
      }
      let dataFetch = await res.json();
	  if(dataFetch.success){
	  dispatch({
        type: FORGOT_PASS_SUCCESS
      });
}
    } catch (e) {
      console.log("Проблема с fetch запросом: ", e.message);
      dispatch({
        type: FORGOT_PASS_FAILED,
      });
    }
  }  
}

export function resetPassRequest(form) {
   return async function (dispatch) {
    try {
      dispatch({
        type: RESET_PASS_REQUEST,
      });
      const res = await fetch('https://norma.nomoreparties.space/api/password-reset/reset', {
    method: 'POST',
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json'
    },
    redirect: 'follow',
    referrerPolicy: 'no-referrer',
	body: JSON.stringify(form)	
  });
      if (!res.ok) {
		dispatch({
          type: RESET_PASS_FAILED,
        });
        throw new Error("Ответ сети не ok");
      }
      let dataFetch = await res.json();
	  if(dataFetch.success){
	  dispatch({
        type: RESET_PASS_SUCCESS
      });
}
    } catch (e) {
      console.log("Проблема с fetch запросом: ", e.message);
      dispatch({
        type: RESET_PASS_FAILED,
      });
    }
  }  
}
