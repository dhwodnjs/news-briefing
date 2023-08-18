import { createSlice } from "@reduxjs/toolkit";
import {
  IThemeArticles,
  DThemeArticles,
  IArticle,
  IHeadline,
} from "./interface";

export const themeArticlesSlice = createSlice({
  name: "themeArticles",
  initialState: {
    themeArticles: [] as IHeadline[],
  },
  reducers: {
    setThemeArticles: (state, action) => {
      action.payload.map((article: any) => {
        state.themeArticles.push({
          id: article.id,
          title: article.title,
          image: article.image,
        });
      });
    },
  },
});

export const { setThemeArticles } = themeArticlesSlice.actions;
export default themeArticlesSlice.reducer;
