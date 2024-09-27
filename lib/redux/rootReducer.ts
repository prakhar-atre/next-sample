import { authSlice } from './slices/authSlice';
import { layoutSlice } from './slices/layoutSlice';
import { masterDataSlice } from './slices/masterDataSlice';

export const reducer = {
  layout: layoutSlice.reducer,
  masterData: masterDataSlice.reducer,
  auth: authSlice.reducer
};
