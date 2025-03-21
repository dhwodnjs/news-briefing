import { useDispatch } from "react-redux";
import { requestUserRecommendation } from "../../../requests/requestUserRecommendation";
import {
  setRecLoaded,
  setRecommendation,
} from "../../../redux/recommendation.slice";

export const loadUserRecommendation = (
  dispatch: ReturnType<typeof useDispatch>,
) => {
  const getUserRecommendation = async () => {
    const data = await requestUserRecommendation();
    const converted = JSON.parse(data);
    const news = converted.news;
    return news;
  };

  getUserRecommendation().then((news) => {
    dispatch(setRecommendation(news));
    dispatch(setRecLoaded(true));
  });
};
