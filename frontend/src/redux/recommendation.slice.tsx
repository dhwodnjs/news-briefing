import { createSlice } from "@reduxjs/toolkit";
import { IArticle, DArticle, IHeadline } from "./interface";

export const recommendationSlice = createSlice({
  name: "recommendation",
  initialState: {
    articles: [] as IHeadline[],
  },
  reducers: {
    setRecommendation: (state, action) => {
      state.articles = [];
      action.payload.map((article: any) => {
        state.articles.push({
          id: article.id,
          title: article.title,
          image: article.image,
          press: article.press,
          body: article.body,
        });
      });
    },
  },
});

export const { setRecommendation } = recommendationSlice.actions;
export default recommendationSlice.reducer;
