import { createSlice } from "@reduxjs/toolkit";
import { DArticle, IArticle } from "./interface";

export const headlineSlice = createSlice({
  name: "headline",
  initialState: {
    article: {} as IArticle, // ???
  },
  reducers: {
    initHeadlineSlice: (state) => {
      state.article = DArticle;
      //   {} as IArticle; // 불러와서 저장해야 되는데 ..
    },
  },
});

export const { initHeadlineSlice } = headlineSlice.actions;
export default headlineSlice.reducer;
