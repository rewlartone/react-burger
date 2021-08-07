import { TOrder } from "../types"

export const WS_CONNECTION_START: 'WS_CONNECTION_START' = 'WS_CONNECTION_START';
export const WS_CONNECTION_MY_START: 'WS_CONNECTION_MY_START' = 'WS_CONNECTION_MY_START'
export const WS_CONNECTION_SUCCESS: 'WS_CONNECTION_SUCCESS' = 'WS_CONNECTION_SUCCESS';
export const WS_CONNECTION_MY_SUCCESS: 'WS_CONNECTION_MY_SUCCESS' = 'WS_CONNECTION_MY_SUCCESS';
export const WS_CONNECTION_ERROR: 'WS_CONNECTION_ERROR' = 'WS_CONNECTION_ERROR';
export const WS_CONNECTION_MY_ERROR: 'WS_CONNECTION_MY_ERROR' = 'WS_CONNECTION_MY_ERROR';
export const WS_CONNECTION_CLOSED: 'WS_CONNECTION_CLOSED' = 'WS_CONNECTION_CLOSED';
export const WS_CONNECTION_MY_CLOSED: 'WS_CONNECTION_MY_CLOSED' = 'WS_CONNECTION_MY_CLOSED';
export const WS_GET_ORDER: 'WS_GET_ORDER' = 'WS_GET_ORDER';
export const WS_GET_MY_ORDER: 'WS_GET_MY_ORDER' = 'WS_GET_MY_ORDER';

export interface WSResponse{
	success: string; 
	orders: TOrder[];
	total: number;
	totalToday: number
	}
	
export interface IWSConnectionSuccess {
    readonly type: typeof WS_CONNECTION_SUCCESS;
}

export interface IWSConnectionError {
    readonly type: typeof WS_CONNECTION_ERROR;
	readonly payload: string;
}
export interface IWSConnectionClosed {
    readonly type: typeof WS_CONNECTION_CLOSED;
	readonly payload: string;
}
export interface IWSGetOrder {
    readonly type: typeof WS_GET_ORDER;
	readonly payload: WSResponse;
}

export interface IWSConnectionMySuccess {
    readonly type: typeof WS_CONNECTION_MY_SUCCESS;
}

export interface IWSConnectionMyError {
    readonly type: typeof WS_CONNECTION_MY_ERROR;
	readonly payload: string;
}
export interface IWSConnectionMyClosed {
    readonly type: typeof WS_CONNECTION_MY_CLOSED;
	readonly payload: string;
}
export interface IWSGetMyOrder {
    readonly type: typeof WS_GET_MY_ORDER;
	readonly payload: WSResponse;
}

export type TWSActions = IWSConnectionSuccess | IWSConnectionError | IWSConnectionClosed | IWSGetOrder | IWSConnectionMySuccess | IWSConnectionMyError | IWSConnectionMyClosed | IWSGetMyOrder;
