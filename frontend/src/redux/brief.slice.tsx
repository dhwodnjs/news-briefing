import { createSlice } from "@reduxjs/toolkit";
interface Brief {
  result: string;
}
const briefList: string[] = [];
const briefSummaried: Brief[] = [];
const briefImage: string[] = [];
const briefTitles: string[] = [];

const tBriefList: string[] = [];
const tBriefSummaried: Brief[] = [];
const tBriefImage: string[] = [];
const tBriefTitles: string[] = [];

export const briefSlice = createSlice({
  name: "brief",
  initialState: {
    dataloaded: false,
    briefUserStart: false,
    briefThemeStart: false,
    imageList: briefImage,
    briefList: briefList,
    briefSummaried: briefSummaried,
    briefTitles: briefTitles,
    tImageList: tBriefImage,
    tBriefList: tBriefList,
    tBriefSummaried: tBriefSummaried,
    tBriefTitles: tBriefTitles,
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
    pushBriefTitle: (state, action) => {
      state.briefTitles.push(action.payload);
    },
    pushTBriefBody: (state, action) => {
      state.tBriefList.push(action.payload);
    },
    pushTBriefSummaried: (state, action) => {
      state.tBriefSummaried.push(action.payload);
    },
    pushTBriefTitle: (state, action) => {
      state.tBriefTitles.push(action.payload);
    },
    pushTBriefImage: (state, action) => {
      state.tImageList.push(action.payload);
    },
  },
});

export const {
  setBriefUser,
  setBriefTheme,
  clearBriefList,
  clearBriefSummaried,
  clearImageList,
  pushImageList,
  pushBriefBody,
  pushBriefSummaried,
  setDataLoaded,
  pushBriefTitle,
  pushTBriefBody,
  pushTBriefSummaried,
  pushTBriefTitle,
  pushTBriefImage,
} = briefSlice.actions;
export default briefSlice.reducer;
