import { createSlice } from "@reduxjs/toolkit";
import { IArticle, DArticle, IHeadline } from "./interface";

export const recommendationSlice = createSlice({
  name: "recommendation",
  initialState: {
    articles: [] as IHeadline[],
  },
  reducers: {
    setRecommendation: (state, action) => {
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

export const { setRecommendation } = recommendationSlice.actions;
export default recommendationSlice.reducer;
