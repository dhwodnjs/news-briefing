import React, { useEffect } from "react";
import * as S from "../styles";
import Header from "../Common/Header";
import Categories from "../Common/Categories";
import TodayHeadline from "./components/TodayHeadline";
import ThemeRecommendation from "./components/ThemeRecommendation";
import Brief from "../Common/Brief";
import UserRecommendations from "../Common/UserRecommendations";
import ProfileCircle from "../Common/ProfileCircle";
import { useDispatch } from "react-redux";
// import { initRecommendationSlice } from "../../redux/recommendation.slice";
// import { initThemeRecommendationSlice } from "../../redux/themeRecommendation.slice";
// import { initThemeArticlesSlice } from "../../redux/themeArticles.slice";

const Main = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    // dispatch(initRecommendationSlice());
    // dispatch(initThemeRecommendationSlice());
    // dispatch(initThemeArticlesSlice());
  });
  return (
    <S.MainWindow>
      <Header />
      <ProfileCircle />
      <Categories />
      <S.MainPage>
        <TodayHeadline />
        <UserRecommendations />
        <ThemeRecommendation theme={"IT"} />
        <Brief />
      </S.MainPage>
    </S.MainWindow>
  );
};

export default Main;
