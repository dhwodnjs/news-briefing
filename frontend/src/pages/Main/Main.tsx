import React, { useEffect } from "react";
import * as S from "../styles";
import Header from "../Common/Header";
import Categories from "../Common/Categories";
import TodayHeadline from "./components/TodayHeadline";
import ThemeRecommendation from "./components/ThemeRecommendation";
import Brief from "../Common/Brief";
import UserRecommendations from "../Common/UserRecommendations";
import ProfileCircle from "../Common/ProfileCircle";

const Main = () => {
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
