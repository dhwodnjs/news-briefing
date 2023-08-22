import { useDispatch } from "react-redux";
import { requestArticle } from "../../../requests/requestArticle";
import { setArticle, updateContent } from "../../../redux/article.slice";
import { requestSummary } from "../../../requests/requestSummary";
import { IArticleDB } from "../../../redux/interface";
import { get } from "http";
import { requestPolite } from "../../../requests/requestPolite";

// export const loadArticle = (
//   article_id: number,
//   dispatch: ReturnType<typeof useDispatch>,
// ) => {
//   const getArticle = async () => {
//     const data = await requestArticle(article_id);
//     const converted = JSON.parse(data);
//     const article = converted.news;
//     return article;
//   };

//   getArticle().then((article) => {
//     dispatch(
//       setArticle({
//         id: article[0].id,
//         title: article[0].title,
//         image: article[0].image,
//         content: article[0].body,
//       }),
//     );
//   });
// };

export const loadArticleSummary = (article_id: number) => {
  const getArticle = async (id: number) => {
    const data = await requestArticle(id);
    const converted = JSON.parse(data);
    const article = converted.news;
    return article[0];
  };

  const getSummaryTemp = async (article: IArticleDB) => {
    await delay(2000);
    const result = { ...article, body: article.body.slice(0, 20) };
    return result;
  };

  const getSummary = async (article: IArticleDB) => {
    const data = await requestSummary(article.body);

    const polite = await requestPolite(data.result);

    const result = { ...article, body: polite.result }; // 맞나 ..? ...
    return result;
  };

  return getArticle(article_id).then((article) => {
    return getSummary(article); // 실제 summary는 getSummary로 대체
  });
};

const delay = (ms: number) => {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
};
