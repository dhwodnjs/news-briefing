import { createSlice } from "@reduxjs/toolkit";
import { IHeadline } from "./interface";

export const recommendationSlice = createSlice({
  name: "recommendation",
  initialState: {
    articles: [] as IHeadline[],
    isLoaded: false,
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
    setRecLoaded: (state, action) => {
      state.isLoaded = action.payload;
    },
  },
});

export const { setRecommendation, setRecLoaded } = recommendationSlice.actions;
export default recommendationSlice.reducer;
