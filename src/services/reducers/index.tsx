import { combineReducers } from "redux";
import { ingredientsReducer } from "./ingredients";
import { modalReducer } from "./modal";
import { userReducer } from "./user";
import { burgerConstructorReducer } from "./constructor";
import { wsReducer } from './ws';


export const rootReducer = combineReducers({
  ingredients: ingredientsReducer,
  burgerConstructor: burgerConstructorReducer,
  modal: modalReducer,
  user: userReducer,
  ws: wsReducer
});
