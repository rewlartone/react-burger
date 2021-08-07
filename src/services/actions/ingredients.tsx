import { TIngredient } from "../types"
import { AppThunk, AppDispatch } from '../hooks';


export const GET_INGREDIENTS_REQUEST: "GET_INGREDIENTS_REQUEST" = "GET_INGREDIENTS_REQUEST";
export const GET_INGREDIENTS_SUCCESS: "GET_INGREDIENTS_SUCCESS" = "GET_INGREDIENTS_SUCCESS";
export const GET_INGREDIENTS_FAILED: "GET_INGREDIENTS_FAILED" = "GET_INGREDIENTS_FAILED";

export interface IGetIngredientsRequest {
    readonly type: typeof GET_INGREDIENTS_REQUEST;
}

export interface IGetIngredientsSuccess {
    readonly type: typeof GET_INGREDIENTS_SUCCESS;
    readonly ingredients: TIngredient[];
}

export interface IGetIngredientsFailed {
    readonly type: typeof GET_INGREDIENTS_FAILED;
}

export type TIngredientsActions = IGetIngredientsRequest | IGetIngredientsSuccess | IGetIngredientsFailed;

export const getIngredients: AppThunk = () => {
  return async function (dispatch: AppDispatch) {
    try {
      dispatch({
        type: GET_INGREDIENTS_REQUEST,
      });
      const res = await fetch(
        "https://norma.nomoreparties.space/api/ingredients"
      );
      if (!res.ok) {
		dispatch({
          type: GET_INGREDIENTS_FAILED,
        });
        throw new Error("Ответ сети не ok");
      }
      let dataFetch = await res.json();
      dataFetch = dataFetch.data;
      dispatch({
        type: GET_INGREDIENTS_SUCCESS,
        ingredients: dataFetch,
      });
    } catch (e) {
      console.log("Проблема с fetch запросом: ", e.message);
      dispatch({
        type: GET_INGREDIENTS_FAILED,
      });
    }
  };
}
