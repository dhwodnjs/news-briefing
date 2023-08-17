import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IHeadline, IArticle } from "./interface";
import { requestHeadline } from "../requests/requestHeadline";
import { RootState } from "./store";

export const headlineSlice = createSlice({
  name: "headline",
  initialState: {
    status: "idle",
    article: {} as IHeadline, // !
  },

  reducers: {
    setHeadline: (state, action) => {
      state.article.id = action.payload.id;
      state.article.title = action.payload.title;
      state.article.image = action.payload.image;
    },
  },
});

export const { setHeadline } = headlineSlice.actions;
export default headlineSlice.reducer;
