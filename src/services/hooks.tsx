import {
  TypedUseSelectorHook,
  useDispatch as dispatchHook,
  useSelector as selectorHook
} from 'react-redux';
import { ThunkAction } from 'redux-thunk';
import { store } from '../index';
import { ActionCreator } from 'redux';
import { rootReducer } from './reducers/index';
import { TWSActions } from './actions/ws';
import { TConstructorActions } from './actions/constructor';
import { TModalActions } from './actions/modal';
import { TUserActions } from './actions/user';
import { TIngredientsActions } from './actions/ingredients';

type TApplicationActions = TIngredientsActions & TUserActions & TModalActions & TConstructorActions & TWSActions;

export type RootState = ReturnType<typeof rootReducer>;
export type AppThunk<TReturn = void> = ActionCreator< ThunkAction<TReturn, RootState, unknown, TApplicationActions> >;
export type AppDispatch = typeof store.dispatch;

export const useDispatch = () => dispatchHook<AppDispatch | AppThunk>();
export const useSelector: TypedUseSelectorHook<RootState> = selectorHook;
