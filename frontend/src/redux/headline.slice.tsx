import { createSlice } from "@reduxjs/toolkit";
import { IHeadline } from "./interface";

export const headlineSlice = createSlice({
  name: "headline",
  initialState: {
    status: "idle",
    article: {} as IHeadline, // !
    isLoaded: false,
  },

  reducers: {
    setHeadline: (state, action) => {
      state.article.id = action.payload.id;
      state.article.title = action.payload.title;
      state.article.image = action.payload.image;
      state.article.body = action.payload.body;
    },
    setLoaded: (state, action) => {
      state.isLoaded = action.payload;
    },
  },
});

export const { setHeadline, setLoaded } = headlineSlice.actions;
export default headlineSlice.reducer;
