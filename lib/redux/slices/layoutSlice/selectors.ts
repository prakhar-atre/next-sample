import type { ReduxState } from '@/lib/redux';

export const selectSidebarOpen = (state: ReduxState) => state.layout.sidebarOpen;
export const selectTheme = (state: ReduxState) => state.layout.theme;
