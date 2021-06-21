import { CLEAR_CONSTRUCTOR } from "./constructor.jsx";

export const SET_ITEM = 'SET_ITEM';
export const CLOSE = 'CLOSE';
export const ORDER_DETAILS = 'ORDER_DETAILS';
export const GET_ORDER_REQUEST = 'GET_ORDER_REQUEST';
export const GET_ORDER_SUCCESS = 'GET_ORDER_SUCCESS';
export const GET_ORDER_FAILED = 'GET_ORDER_FAILED';

export function getOrder(arr) {
  return async function(dispatch) {
	 try {
		 dispatch({
      type: GET_ORDER_REQUEST
    });
        const res =  await fetch('https://norma.nomoreparties.space/api/orders', {
			method: "POST",
			headers: {
  'Content-Type': 'application/json'
},
			body: JSON.stringify({
				ingredients : arr
			})
});
        if (!res.ok) {
		dispatch({
          type: GET_ORDER_FAILED
        });
          throw new Error("Ответ сети не ok");
        }
        let dataFetch = await res.json();
        dispatch({
          type: GET_ORDER_SUCCESS,
		  num: dataFetch.order.number
        });
		dispatch({
      type: CLEAR_CONSTRUCTOR,
    });
      } catch (e) {
        console.log("Проблема с fetch запросом: ", e.message);
		dispatch({
          type: GET_ORDER_FAILED
        });
      }
  };
}