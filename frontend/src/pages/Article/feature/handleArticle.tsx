import { useDispatch } from "react-redux";
import { requestArticle } from "../../../requests/requestArticle";
import { setArticle, updateContent } from "../../../redux/article.slice";
import { requestSummary } from "../../../requests/requestSummary";

export const loadArticle = (
  article_id: number,
  dispatch: ReturnType<typeof useDispatch>,
) => {
  const getArticle = async () => {
    const data = await requestArticle(article_id);
    const converted = JSON.parse(data);
    const article = converted.news;
    return article;
  };

  getArticle().then((article) => {
    dispatch(
      setArticle({
        id: article[0].id,
        title: article[0].title,
        image: article[0].image,
        content: article[0].body,
        // tags: article[0].tags,
        // likes: article[0].likes,
      }),
    );
  });
};

export const summarizeArticle = (
  content: string,
  dispatch: ReturnType<typeof useDispatch>,
) => {
  const getSummary = async () => {
    const data = await requestSummary(content);

    // console.log(data);
    // const converted = JSON.parse(data);
    // const summary = converted.result;

    const summary = data.result;

    return summary;
  };

  getSummary().then((summary) => {
    dispatch(
      updateContent({
        summary: summary,
        // tags: article[0].tags,
        // likes: article[0].likes,
      }),
    );
  });
};
