import { useDispatch } from "react-redux";
import store from "../../../redux/store";
import {
  pushBriefBody,
  pushBriefSummaried,
  pushBriefTitle,
  pushImageList,
  pushTBriefBody,
  pushTBriefImage,
  pushTBriefSummaried,
  pushTBriefTitle,
} from "../../../redux/brief.slice";
import { requestSummary } from "../../../requests/requestSummary";

const updateBrief = async (dispatch: ReturnType<typeof useDispatch>) => {
  const state = store.getState();

  const headlineBody = state.headline.article.body;
  const headlineImage = state.headline.article.image;
  const headlineTitle = state.headline.article.title;

  const themeBody = state.themeRecommendation.articles[0].body;
  const themeImage = state.themeRecommendation.articles[0].image;
  const themeTitle = state.themeRecommendation.articles[0].title;

  const recommendBody = state.recommendation.articles[0].body;
  const recommendImage = state.recommendation.articles[0].image;
  const recommendTitle = state.recommendation.articles[0].title;

  dispatch(pushBriefBody(headlineBody));
  dispatch(pushBriefBody(themeBody));
  dispatch(pushBriefBody(recommendBody));

  dispatch(pushImageList(headlineImage));
  dispatch(pushImageList(themeImage));
  dispatch(pushImageList(recommendImage));

  dispatch(pushBriefTitle(headlineTitle));
  dispatch(pushBriefTitle(themeTitle));
  dispatch(pushBriefTitle(recommendTitle));
};

const updateThemeBrief = async (dispatch: ReturnType<typeof useDispatch>) => {
  const state = store.getState();

  const themeBody = state.themeRecommendation.articles[0].body;
  const themeImage = state.themeRecommendation.articles[0].image;
  const themeTitle = state.themeRecommendation.articles[0].title;

  const themeBody2 = state.themeRecommendation.articles[0].body;
  const themeImage2 = state.themeRecommendation.articles[0].image;
  const themeTitle2 = state.themeRecommendation.articles[0].title;

  dispatch(pushTBriefBody(themeBody));
  dispatch(pushTBriefBody(themeBody2));

  dispatch(pushTBriefImage(themeImage));
  dispatch(pushTBriefImage(themeImage2));

  dispatch(pushTBriefTitle(themeTitle));
  dispatch(pushTBriefTitle(themeTitle2));
};

const updateBriefSummary = async (dispatch: ReturnType<typeof useDispatch>) => {
  const state = store.getState();
  const briefList = state.brief.briefList;

  for (const brief of briefList) {
    try {
      const data = await requestSummary(brief);
      dispatch(pushBriefSummaried(data));
    } catch (error) {
      console.error(`Failed to update summary for brief: ${brief}`, error);
    }
  }
};

const updateThemeBriefSummary = async (
  dispatch: ReturnType<typeof useDispatch>,
) => {
  const state = store.getState();
  const briefList = state.brief.tBriefList;

  for (const brief of briefList) {
    try {
      const data = await requestSummary(brief);
      dispatch(pushTBriefSummaried(data));
    } catch (error) {
      console.error(`Failed to update summary for brief: ${brief}`, error);
    }
  }
};

export const updateAll = async (dispatch: ReturnType<typeof useDispatch>) => {
  updateBrief(dispatch);
  updateBriefSummary(dispatch);
  updateThemeBrief(dispatch);
  updateThemeBriefSummary(dispatch);
  console.log("updateAll");
};

export default updateBrief;
