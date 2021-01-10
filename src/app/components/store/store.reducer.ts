import { createReducer, on } from '@ngrx/store';
import { login, accountAction, LOAD_USER_INFO } from './store.action';

export interface State {
  purchaseForm: Object;
  accountStatus: Boolean;
  userInfo: Object;
}

export const initialState: State = {
  purchaseForm: {},
  accountStatus: false,
  userInfo: {}
};
const _counterReducer = createReducer(
  initialState,
  on(login, (state, { purchaseForm }) => (
    { ...state, purchaseForm: purchaseForm })),
  on(accountAction, (state, { accountStatus }) => (
    { ...state, accountStatus: accountStatus })),
  on(LOAD_USER_INFO, (state, { userInfo }) => (
    { ...state, userInfo: userInfo })),
);

export function counterReducer(state, action) {
  return _counterReducer(state, action);
}