import { createSlice } from "@reduxjs/toolkit";
import { IArticle } from "./interface";

export const articleSlice = createSlice({
  name: "article",
  initialState: {
    article: {} as IArticle,
  },
  reducers: {
    setArticle: (state, action) => {
      state.article.id = action.payload.id;
      state.article.title = action.payload.title;
      // state.article.theme = action.payload.theme
      state.article.image = action.payload.image;
      state.article.content = action.payload.content;
      // state.article.tags = action.payload.tags
      // state.article.press = action.payload.press
    },
    updateContent: (state, action) => {
      state.article.content = action.payload.summary;
    },
  },
});

export const { setArticle, updateContent } = articleSlice.actions;
export default articleSlice.reducer;
