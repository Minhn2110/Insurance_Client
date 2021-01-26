import { createReducer, on } from '@ngrx/store';
import { login, accountAction, LOAD_USER_INFO, LOAD_ORDER_INFO } from './store.action';

export interface State {
  purchaseForm: Object;
  accountStatus: Boolean;
  userInfo: Object;
  orderInfo: Object;

}

export const initialState: State = {
  purchaseForm: {},
  accountStatus: false,
  userInfo: {},
  orderInfo: {}
};
const _counterReducer = createReducer(
  initialState,
  on(login, (state, { purchaseForm }) => (
    { ...state, purchaseForm: purchaseForm })),
  on(accountAction, (state, { accountStatus }) => (
    { ...state, accountStatus: accountStatus })),
  on(LOAD_USER_INFO, (state, { userInfo }) => (
    { ...state, userInfo: userInfo })),
  on(LOAD_ORDER_INFO, (state, { orderInfo }) => (
    { ...state, orderInfo: orderInfo })),
);

export function counterReducer(state, action) {
  return _counterReducer(state, action);
}