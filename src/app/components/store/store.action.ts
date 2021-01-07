import { createAction, props } from '@ngrx/store';

export const login = createAction( '[Purchase Page] Send Purchase data', props<{ purchaseForm: any }>());