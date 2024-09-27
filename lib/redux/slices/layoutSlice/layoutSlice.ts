/* Core */
import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

import { ThemeEnum } from '../../../../src/constants/enum';
import StorageService from '../../../../src/services/storage-service';

export interface LayoutSliceState {
  sidebarOpen: boolean;
  theme: ThemeEnum;
}

const initialState: LayoutSliceState = {
  sidebarOpen: false,
  theme:
    typeof window !== 'undefined' &&
    StorageService.get('theme') &&
    StorageService.get('theme') === ThemeEnum.Light
      ? (StorageService.get('theme') as ThemeEnum)
      : ThemeEnum.Dark
};

export const layoutSlice = createSlice({
  name: 'layout',
  initialState,
  reducers: {
    updateSidebarOpen: (state, action: PayloadAction<boolean>) => {
      state.sidebarOpen = action.payload;
    },
    updateTheme: (state, action: PayloadAction<ThemeEnum>) => {
      StorageService.set('theme', action.payload);
      state.theme = action.payload;
    }
  }
});

export const { updateSidebarOpen, updateTheme } = layoutSlice.actions;
