import Header from "../Common/Header";
import * as S from "../styles";
import SelectProfile from "./components/SelectProfile";

import { useDispatch } from "react-redux";
import { initHeadlineSlice } from "../../redux/headline.slice";
import { initRecommendationSlice } from "../../redux/recommendation.slice";
import { initThemeRecommendationSlice } from "../../redux/themeRecommendation.slice";
import { initThemeArticlesSlice } from "../../redux/themeArticles.slice";
import { useEffect } from "react";

const Profile = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initHeadlineSlice());
    dispatch(initRecommendationSlice());
    dispatch(initThemeRecommendationSlice());
    dispatch(initThemeArticlesSlice());
  });

  return (
    <S.MainWindow>
      <Header />
      <SelectProfile />
    </S.MainWindow>
  );
};

export default Profile;
