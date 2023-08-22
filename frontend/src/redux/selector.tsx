import { RootState } from "./store";

const selectHeadline = (state: RootState) => state.headline.article;

const selectRecommendation = (state: RootState) =>
  state.recommendation.articles;

const selectThemeRecommendation = (state: RootState) =>
  state.themeRecommendation.articles;

const selectThemeArticles = (state: RootState) =>
  state.themeArticles.themeArticles;

const selectArticle = (state: RootState) => state.article.article;

const selectBriefUserState = (state: RootState) => state.brief.briefUserStart;

const selectBriefThemeState = (state: RootState) => state.brief.briefThemeStart;

const selectBriefList = (state: RootState) => state.brief.briefList;

const isHeadlineLoaded = (state: RootState) => state.headline.isLoaded;

const isRecommendationLoaded = (state: RootState) =>
  state.recommendation.isLoaded;

const isThemeRecommendationLoaded = (state: RootState) =>
  state.themeRecommendation.isLoaded;

const selectBriefSummary = (state: RootState) => state.brief.briefSummaried;

const selectBriefTitle = (state: RootState) => state.brief.briefTitles;

const selectBriefImage = (state: RootState) => state.brief.imageList;

export {
  selectHeadline,
  selectRecommendation,
  selectThemeRecommendation,
  selectThemeArticles,
  selectArticle,
  selectBriefUserState,
  selectBriefThemeState,
  selectBriefList,
  isHeadlineLoaded,
  isRecommendationLoaded,
  isThemeRecommendationLoaded,
  selectBriefSummary,
  selectBriefTitle,
  selectBriefImage,
};
