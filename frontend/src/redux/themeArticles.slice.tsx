import { createSlice } from "@reduxjs/toolkit";
import { IThemeArticles, DThemeArticles } from "./interface";

export const themeArticlesSlice = createSlice({
  name: "themeArticles",
  initialState: {
    themeArticles: [] as IThemeArticles[],
  },
  reducers: {
    initThemeArticlesSlice(state) {
      state.themeArticles = [DThemeArticles, DThemeArticles, DThemeArticles];
    },
  },
});

export const { initThemeArticlesSlice } = themeArticlesSlice.actions;
export default themeArticlesSlice.reducer;
