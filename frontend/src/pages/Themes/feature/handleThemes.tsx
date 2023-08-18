import { useDispatch } from "react-redux";
import { requestTheme } from "../../../requests/requestTheme";
import { setThemeArticles } from "../../../redux/themeArticles.slice";
import { requestHeadline } from "../../../requests/requestHeadline";

export const loadThemeArticles = (
  category_id: number,
  dispatch: ReturnType<typeof useDispatch>,
) => {
  const getThemes = async () => {
    const data = await requestTheme(category_id);
    // const data = await requestHeadline();
    const converted = JSON.parse(data);
    const news = converted.news;
    return news;
  };

  getThemes().then((news) => {
    dispatch(setThemeArticles(news));
  });
};
