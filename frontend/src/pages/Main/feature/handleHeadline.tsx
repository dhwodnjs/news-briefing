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
    dispatch(
      setHeadline({
        id: news[0].id,
        title: news[0].title,
        image: news[0].image,
        body: news[0].body,
        // id: "123445",
        // title: "리액트 너무 어려워 하기 싫어 웹개발 싫어",
        // image:
        //   "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png",
      }),
    );
    // });
  });
};
