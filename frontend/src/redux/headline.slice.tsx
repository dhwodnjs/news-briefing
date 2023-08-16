import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IArticle } from "./interface";

export const headlineSlice = createSlice({
  name: "headline",
  initialState: {
    status: "idle",
    article: {} as IArticle, // !
  },

  reducers: {
    startFetching: (state) => {
      state.status = "loading";
    },
    fetchedSuccessfully: (state, action: PayloadAction<IArticle>) => {
      state.status = "succeeded";
      state.article = action.payload;
    },
    fetchFailed: (state) => {
      state.status = "failed";
    },
  },
});

export const { startFetching, fetchedSuccessfully, fetchFailed } =
  headlineSlice.actions;
export default headlineSlice.reducer;
