import { createSlice } from "@reduxjs/toolkit";
interface Brief {
  result: string;
}
const briefList: string[] = [];
const briefSummaried: Brief[] = [];
const briefAudio: ArrayBuffer[] = [];
const briefImage: string[] = [];
const briefTitles: string[] = [];

export const briefSlice = createSlice({
  name: "brief",
  initialState: {
    dataloaded: false,
    briefUserStart: false,
    briefThemeStart: false,
    imageList: briefImage,
    briefList: briefList,
    briefSummaried: briefSummaried,
    briefAudio: briefAudio,
    briefTitles: briefTitles,
  },
  reducers: {
    setDataLoaded: (state, action) => {
      state.dataloaded = action.payload;
    },
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
    clearBriefList: (state) => {
      state.briefList = [];
    },
    clearBriefSummaried: (state) => {
      state.briefSummaried = [];
    },
    clearBriefAudio: (state) => {
      state.briefAudio = [];
    },
    clearImageList: (state) => {
      state.imageList = [];
    },
    pushImageList: (state, action) => {
      state.imageList.push(action.payload);
    },
    pushBriefBody: (state, action) => {
      state.briefList.push(action.payload);
    },
    pushBriefSummaried: (state, action) => {
      state.briefSummaried.push(action.payload);
    },
    pushBriefAudio: (state, action) => {
      state.briefAudio.push(action.payload);
    },
    pushBriefTitle: (state, action) => {
      state.briefTitles.push(action.payload);
    },
  },
});

export const {
  setBriefUser,
  setBriefTheme,
  clearBriefList,
  clearBriefSummaried,
  clearBriefAudio,
  clearImageList,
  pushImageList,
  pushBriefBody,
  pushBriefAudio,
  pushBriefSummaried,
  setDataLoaded,
  pushBriefTitle,
} = briefSlice.actions;
export default briefSlice.reducer;
