import { setHeadline } from "../../../redux/headline.slice";
import { requestHeadline } from "../../../requests/requestHeadline";
import { useDispatch } from "react-redux";

export const loadHeadline = (dispatch: ReturnType<typeof useDispatch>) => {
  const getNews = async () => {
    const data = await requestHeadline();
    const converted = JSON.parse(data);
    const news = converted.news;
    return news;
  };

  getNews().then((news) => {
    console.log(news);
    dispatch(
      setHeadline({
        id: news[0]._id,
        title: news[0].title,
        image: news[0].image,
      }),
    );
  });
};
