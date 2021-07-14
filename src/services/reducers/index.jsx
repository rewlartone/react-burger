import { combineReducers } from "redux";
import { ingredientsReducer } from "./ingredients.jsx";
import { modalReducer } from "./modal.jsx";
import { userReducer } from "./user.jsx";
import { burgerConstructorReducer } from "./constructor.jsx";

export const rootReducer = combineReducers({
  ingredients: ingredientsReducer,
  burgerConstructor: burgerConstructorReducer,
  modal: modalReducer,
  user: userReducer
});
