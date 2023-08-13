import React from 'react';
import * as S from '../styles';
import Header from '../Common/Header';
import Categories from '../Common/Categories';
import TodayHeadline from './components/TodayHeadline';
import ThemeRecommendation from './components/ThemeRecommendation';
import Brief from '../Common/Brief';
import UserRecommendations from '../Common/UserRecommendations';

const Main = () => {
  return (
    <S.MainWindow>
      <Header />
      <Categories />
      <S.MainPage>
        <TodayHeadline />
        <UserRecommendations />
        <ThemeRecommendation theme={''} />
        <Brief />
      </S.MainPage>
    </S.MainWindow>
  );
};

export default Main;
