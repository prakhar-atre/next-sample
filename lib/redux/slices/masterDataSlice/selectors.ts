import type { ReduxState } from '@/lib/redux';

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectSiteData = (state: ReduxState) => state.masterData.sites;
export const selectManufacturerData = (state: ReduxState) => state.masterData.manufacturers;
export const selectMenuItemData = (state: ReduxState) => state.masterData.menuItems;
