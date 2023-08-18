import { useDispatch } from "react-redux";
import { setThemeArticles } from "../../../redux/themeArticles.slice";
import { requestHeadline } from "../../../requests/requestHeadline";
import { requestThemeRecommendation } from "../../../requests/requestThemeRecommendation";
import { setThemeRecommendation } from "../../../redux/themeRecommendation.slice";

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
    });
  } catch (e) {
    console.log(e);
  }
};
// ..?!
