import { createAction, props } from '@ngrx/store';

export const login = createAction( '[Purchase Page] Send Purchase data', props<{ purchaseForm: any }>());

export const accountAction = createAction( '[Authentication] Logged Action', props<{ accountStatus: boolean }>());

export const LOAD_USER_INFO = createAction( '[Authentication] Load User Info', props<{ userInfo: Object }>());
export const LOAD_ORDER_INFO = createAction( '[Purchase] Load Order Info', props<{ orderInfo: Object }>());