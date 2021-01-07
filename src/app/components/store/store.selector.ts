 
export interface AppState {
    count: String;
  }

import { createSelector } from '@ngrx/store';
  import * as fromCustomer from './store.reducer';


export const selectUser = (state: AppState) => state.count;

export const selectTotal = createSelector(
    selectUser,
    (state: any) => state.purchaseForm
  );
