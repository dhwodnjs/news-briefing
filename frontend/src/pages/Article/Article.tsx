import Brief from "../Common/Brief";
import Header from "../Common/Header";
import UserRecommendations from "../Common/UserRecommendations";
import ArticleContent from "./components/ArticleContent";

import * as S from "../styles";
import SideBar from "../Common/SideBar";

const Article = () => {
  return (
    <S.MainWindow id="main-window">
      <Header />
      <SideBar />
      <S.ArticlePage id="article-page">
        <ArticleContent />
        <UserRecommendations />
        <Brief />
      </S.ArticlePage>
    </S.MainWindow>
  );
};

export default Article;
