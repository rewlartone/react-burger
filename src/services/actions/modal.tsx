import { CLEAR_CONSTRUCTOR } from "./constructor";
import { TIngredient } from "../types"
import { AppThunk, AppDispatch } from '../hooks';

export const CLOSE: 'CLOSE' = 'CLOSE';
export const ORDER_DETAILS: 'ORDER_DETAILS' = 'ORDER_DETAILS';
export const GET_ORDER_REQUEST: 'GET_ORDER_REQUEST' = 'GET_ORDER_REQUEST';
export const GET_ORDER_SUCCESS: 'GET_ORDER_SUCCESS' = 'GET_ORDER_SUCCESS';
export const GET_ORDER_FAILED: 'GET_ORDER_FAILED' = 'GET_ORDER_FAILED';


export interface IClose {
    readonly type: typeof CLOSE;
}

export interface IOrderDetails {
    readonly type: typeof ORDER_DETAILS;
}

export interface IGetOrderRequest{
    readonly type: typeof GET_ORDER_REQUEST;
}

export interface IGetOrderSuccess{
    readonly type: typeof GET_ORDER_SUCCESS;
	readonly num: number;
}

export interface IGetOrderFailed{
    readonly type: typeof GET_ORDER_FAILED;
}


export type TModalActions = IClose | IOrderDetails | IGetOrderRequest | IGetOrderSuccess | IGetOrderFailed;


export const getOrder: AppThunk = (arr: TIngredient[]) => {
  return async function(dispatch: AppDispatch) {
	 try {
		 dispatch({
      type: GET_ORDER_REQUEST
    });
        const res =  await fetch('https://norma.nomoreparties.space/api/orders', {
			method: "POST",
			headers: {
  'Content-Type': 'application/json',
  Authorization: 'Bearer ' + localStorage.getItem('accessToken')
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