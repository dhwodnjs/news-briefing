import { useDispatch } from "react-redux";
import { requestThemeRecommendation } from "../../../requests/requestThemeRecommendation";
import {
  setThemeLoaded,
  setThemeRecommendation,
} from "../../../redux/themeRecommendation.slice";

export const loadThemeRecommendation = (
  theme_id: number,
  dispatch: ReturnType<typeof useDispatch>,
) => {
  try {
    const getThemeRec = async () => {
      const data = await requestThemeRecommendation(theme_id);
      const converted = JSON.parse(data);
      const news = converted.news;
      return news;
    };

    getThemeRec().then((news) => {
      dispatch(setThemeRecommendation(news));
      dispatch(setThemeLoaded(true));
    });
  } catch (e) {
    console.log(e);
  }
};
// ..?!
