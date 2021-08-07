import { TIngredient } from "../types"

export const SET_ELEMENT: 'SET_ELEMENT' = 'SET_ELEMENT';
export const SET_ELEMENT_BETWEEN: 'SET_ELEMENT_BETWEEN' = 'SET_ELEMENT_BETWEEN';
export const SET_BUN: 'SET_BUN' = 'SET_BUN';
export const DELETE_ELEMENT: 'DELETE_ELEMENT' = 'DELETE_ELEMENT';
export const CLEAR_CONSTRUCTOR: 'CLEAR_CONSTRUCTOR' = 'CLEAR_CONSTRUCTOR';

export interface ISetElement {
    readonly type: typeof SET_ELEMENT;
	readonly element: TIngredient; 
}

export interface ISetElementBetween {
    readonly type: typeof SET_ELEMENT_BETWEEN;
    readonly element: TIngredient;
	readonly index: number;
}

export interface ISetBun {
    readonly type: typeof SET_BUN;
	readonly bun: TIngredient;
}

export interface IDeleteElement {
    readonly type: typeof DELETE_ELEMENT;
	readonly index: number;
}

export interface IClearConstructor {
    readonly type: typeof CLEAR_CONSTRUCTOR;
	}

export type TConstructorActions = ISetElement | ISetElementBetween | ISetBun | IDeleteElement | IClearConstructor;
