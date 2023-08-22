import store from "../redux/store";

const isLoaded = (body: string | undefined) => {
  return body && body !== "";
};

const checkLoaded = () => {
  const state = store.getState();
  const headlineBody = state.headline.article.title;
  const themeBody = state.themeRecommendation.articles[0]?.title;
  const recommendBody = state.recommendation.articles[0]?.title;
  console.log("headlineBody", headlineBody);
  return (
    isLoaded(headlineBody) && isLoaded(themeBody) && isLoaded(recommendBody)
  );
};

export const checkLoadedSummary = () => {
  const state = store.getState();
  const summary = state.brief.briefSummaried[0]?.result;
  return isLoaded(summary);
};

export default checkLoaded;
