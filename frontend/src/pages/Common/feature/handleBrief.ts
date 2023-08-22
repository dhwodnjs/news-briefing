import { useDispatch } from "react-redux";
import store from "../../../redux/store";
import {
  pushBriefAudio,
  pushBriefBody,
  pushBriefSummaried,
  pushBriefTitle,
  pushImageList,
} from "../../../redux/brief.slice";
import { requestSummary } from "../../../requests/requestSummary";
import { requestAudio } from "../../../requests/requestAudio";

interface Brief {
  result: string;
}

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

export const updateBriefAudio = async (
  dispatch: ReturnType<typeof useDispatch>,
) => {
  const state = store.getState();
  const briefSummariedList: Brief[] = state.brief.briefSummaried;
  console.log(briefSummariedList);
  for (const brief of briefSummariedList) {
    try {
      console.log(brief);
      const audioData = await requestAudio(brief.result); // Assuming each 'brief' has a 'content' property for which you want audio
      dispatch(pushBriefAudio(audioData));
      // Hypothetically saving the audio data by brief ID
    } catch (error) {
      console.error(`Failed to fetch audio for brief ${brief}:`, error);
    }
  }
};

export const updateAll = async (dispatch: ReturnType<typeof useDispatch>) => {
  await updateBrief(dispatch);
  await updateBriefSummary(dispatch);
};

export default updateBrief;
