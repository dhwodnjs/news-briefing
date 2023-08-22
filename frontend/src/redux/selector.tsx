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

export {
  selectHeadline,
  selectRecommendation,
  selectThemeRecommendation,
  selectThemeArticles,
  selectArticle,
  selectBriefUserState,
  selectBriefThemeState,
};
