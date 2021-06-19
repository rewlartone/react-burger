export const GET_INGREDIENTS_REQUEST = "GET_INGREDIENTS_REQUEST";
export const GET_INGREDIENTS_SUCCESS = "GET_INGREDIENTS_SUCCESS";
export const GET_INGREDIENTS_FAILED = "GET_INGREDIENTS_FAILED";

export function getIngredients() {
  return async function (dispatch) {
    try {
      dispatch({
        type: GET_INGREDIENTS_REQUEST,
      });
      const res = await fetch(
        "https://norma.nomoreparties.space/api/ingredients"
      );
      if (!res.ok) {
        throw new Error("Ответ сети не ok");
        dispatch({
          type: GET_INGREDIENTS_FAILED,
        });
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
