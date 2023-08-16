import { createSlice } from "@reduxjs/toolkit";
import { IArticle, DArticle } from "./interface";

export const recommendationSlice = createSlice({
  name: "recommendation",
  initialState: {
    articles: [] as IArticle[],
  },
  reducers: {
    initRecommendationSlice: (state) => {
      state.articles = [DArticle, DArticle, DArticle, DArticle, DArticle];
    },
  },
});

export const { initRecommendationSlice } = recommendationSlice.actions;
export default recommendationSlice.reducer;
