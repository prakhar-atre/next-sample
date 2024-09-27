import { IManufacturer, IMenuItem, IPageMeta, ISiteAggregated } from '@example-packages';
import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

export interface IMasterDataSliceState {
  sites: {
    data: Array<ISiteAggregated>;
    meta: Partial<IPageMeta>;
  };
  manufacturers: { data: Array<IManufacturer>; meta: Partial<IPageMeta> };
  menuItems: { data: Array<IMenuItem> };
}

const initialState: IMasterDataSliceState = {
  sites: {
    data: [],
    meta: {}
  },
  manufacturers: {
    data: [],
    meta: {}
  },
  menuItems: { data: [] }
};

export const masterDataSlice = createSlice({
  name: 'masterData',
  initialState,
  reducers: {
    updateSiteData: (
      state,
      action: PayloadAction<{ data: Array<ISiteAggregated>; meta: Partial<IPageMeta> }>
    ) => {
      state.sites = action.payload;
    },
    updateManufacturerData: (
      state,
      action: PayloadAction<{ data: Array<IManufacturer>; meta: Partial<IPageMeta> }>
    ) => {
      state.manufacturers = action.payload;
    },
    updateMenuItemData: (state, action: PayloadAction<{ data: Array<IMenuItem> }>) => {
      state.menuItems = action.payload;
    }
  }
});

export const { updateManufacturerData, updateSiteData, updateMenuItemData } =
  masterDataSlice.actions;
