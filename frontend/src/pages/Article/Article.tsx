import React from "react";
import Brief from "../Common/Brief";
import Categories from "../Common/Categories";
import Header from "../Common/Header";
import ProfileCircle from "../Common/ProfileCircle";
import UserRecommendations from "../Common/UserRecommendations";
import ArticleContent from "./components/ArticleContent";

import * as S from "../styles";
import SideBar from "../Common/SideBar";

const Article = () => {
  return (
    <S.MainWindow id="main-window">
      <Header />
      {/* <ProfileCircle />
      <Categories /> */}
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
