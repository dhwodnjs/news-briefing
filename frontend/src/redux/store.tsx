import { configureStore } from "@reduxjs/toolkit";

import headlineSlicer from "./headline.slice";
import recommendationSlicer from "./recommendation.slice";
import themeRecommendationSlicer from "./themeRecommendation.slice";
import themeArticlesSlicer from "./themeArticles.slice";

const store = configureStore({
  reducer: {
    headline: headlineSlicer,
    recommendation: recommendationSlicer,
    themeRecommendation: themeRecommendationSlicer,
    themeArticles: themeArticlesSlicer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
