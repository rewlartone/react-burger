import {
  TypedUseSelectorHook,
  useDispatch as dispatchHook,
  useSelector as selectorHook
} from 'react-redux';
import { ThunkAction } from 'redux-thunk';
import { store } from '../index';
import { ActionCreator } from 'redux';
import { rootReducer } from './reducers/index';
import { TWSActions } from './action/ws';
import { TConstructorActions } from './action/constructor';
import { TModalActions } from './action/modal';
import { TUserActions } from './action/user';
import { TIngredientsActions } from './action/ingredients';

type TApplicationActions = TIngredientsActions & TUserActions & TModalActions & TConstructorActions & TWSActions;

export type RootState = ReturnType<typeof rootReducer>;
export type AppThunk<TReturn = void> = ActionCreator< ThunkAction<TReturn, RootState, unknown, TApplicationActions> >;
export type AppDispatch = typeof store.dispatch; 

export const useDispatch = () => dispatchHook<AppDispatch | AppThunk>();
export const useSelector: TypedUseSelectorHook<RootState> = selectorHook;