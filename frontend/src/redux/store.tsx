import { configureStore } from "@reduxjs/toolkit";

import headlineSlicer from "./headline.slice";
import recommendationSlicer from "./recommendation.slice";
import themeRecommendationSlicer from "./themeRecommendation.slice";
import themeArticlesSlicer from "./themeArticles.slice";
import articleSlicer from "./article.slice";
import briefSlice from "./brief.slice";

const store = configureStore({
  reducer: {
    headline: headlineSlicer,
    recommendation: recommendationSlicer,
    themeRecommendation: themeRecommendationSlicer,
    themeArticles: themeArticlesSlicer,
    article: articleSlicer,
    brief: briefSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
