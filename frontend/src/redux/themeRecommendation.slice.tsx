import { createSlice } from "@reduxjs/toolkit";
import { IArticle, DArticle, IHeadline } from "./interface";

export const themeRecommendationSlice = createSlice({
  name: "themeRecommendation",
  initialState: {
    articles: [] as IHeadline[],
    theme: "",
  },
  reducers: {
    setThemeRecommendation: (state, action) => {
      state.articles = [];
      action.payload.map((article: any) => {
        state.articles.push({
          id: article.id,
          title: article.title,
          image: article.image,
          press: article.press,
        });
      });
    },
  },
});

export const { setThemeRecommendation } = themeRecommendationSlice.actions;
export default themeRecommendationSlice.reducer;
