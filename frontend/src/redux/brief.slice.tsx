import { createSlice } from "@reduxjs/toolkit";

export const briefSlice = createSlice({
  name: "brief",
  initialState: {
    briefUserStart: false,
    briefThemeStart: false,
  },
  reducers: {
    setBriefUser: (state, action) => {
      if (action.payload === false) {
        state.briefUserStart = false;
      } else {
        state.briefUserStart = !state.briefUserStart;
      }
    },
    setBriefTheme: (state, action) => {
      if (action.payload === false) {
        state.briefThemeStart = false;
      } else {
        state.briefThemeStart = !state.briefThemeStart;
      }
    },
  },
});

export const { setBriefUser, setBriefTheme } = briefSlice.actions;
export default briefSlice.reducer;
