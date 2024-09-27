/* Core */
import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

export interface AuthSliceState {
  isAuthenticated: boolean;
}

const initialState: AuthSliceState = {
  isAuthenticated: false
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    updateAuthState: (state, action: PayloadAction<boolean>) => {
      state.isAuthenticated = action.payload;
    }
  }
});

export const { updateAuthState } = authSlice.actions;
