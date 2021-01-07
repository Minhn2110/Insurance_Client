import { createReducer, on } from '@ngrx/store';
import { login } from './store.action';

export interface State {
    purchaseForm: Object;
  }
 
export const initialState: State = {
    purchaseForm: {}
  }; 
const _counterReducer = createReducer(
  initialState,
  on(login, (state, {purchaseForm}) => (
      {...state, purchaseForm: purchaseForm})),
);
 
export function counterReducer(state, action) {
  return _counterReducer(state, action);
}