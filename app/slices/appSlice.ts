import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AppState {
  recentUrls: [];
}

const initialState: AppState = {
  recentUrls: [],
};

export const appSlice: any = createSlice({
  name: "app",
  initialState,
  reducers: {
    setRecentUrls: (state: any, action: PayloadAction<string[]>) => {
      state.recentUrls = [...state.recentUrls, action.payload]
    },
  },
});

export const { setUser, setRecentUrls } = appSlice.actions;

export const selectRecentUrls = (state: { app: AppState }) =>
  state.app.recentUrls;

export default appSlice.reducer;
