import { createSlice } from "@reduxjs/toolkit";
import { IArticle, DArticle } from "./interface";

export const themeRecommendationSlice = createSlice({
  name: "themeRecommendation",
  initialState: {
    articles: [] as IArticle[],
    theme: "",
  },
  reducers: {
    initThemeRecommendationSlice: (state) => {
      state.articles = [DArticle, DArticle];
      state.theme = "경제";
    },
  },
});

export const { initThemeRecommendationSlice } =
  themeRecommendationSlice.actions;
export default themeRecommendationSlice.reducer;
