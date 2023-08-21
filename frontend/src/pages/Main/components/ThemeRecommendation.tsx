import React, { useEffect } from "react";
import * as S from "../../styles";
import SectionTitle from "../../Common/SectionTitle";
import { useDispatch, useSelector } from "react-redux";
import { selectThemeRecommendation } from "../../../redux/selector";
import { loadThemeRecommendation } from "../feature/handleThemeRecommendation";
import { useNavigate } from "react-router-dom";

interface ThemeRecommendationProps {
  theme: string;
}

/**
 * 테마별 추천 뉴스
 * For example in figma, middle bottom IT추천뉴스 component.
 * You need to specify button component.
 */

const ThemeRecommendation = ({ theme }: ThemeRecommendationProps) => {
  const DefaultRec = useSelector(selectThemeRecommendation);

  const dispatch = useDispatch();

  const categories = [
    "IT과학",
    "경제",
    "사회",
    "생활문화",
    "세계",
    "오피니언",
    "정치",
  ];

  const theme_id = categories.indexOf(theme);

  useEffect(() => {
    loadThemeRecommendation(theme_id, dispatch);
  }, []);

  const navigate = useNavigate();

  return (
    <S.ThemeRecommendationContainer id="theme-recommendation-container">
      <SectionTitle text={theme + " 추천 뉴스"} />
      <S.ThemeRecommendationWrapper id="theme-recommedation-wrapper">
        {DefaultRec.map((rec, index) => (
          <S.ThemeRecommendationButtonWrapper
            id="theme-recommendation-button-wrapper"
            key={index}
          >
            <S.ThemeRecommendationButtonImage
              id="theme-button-image"
              src={rec.image}
            />
            <S.ThemeRecommendationButtonTitle
              id="theme-recommendation-button-title"
              onClick={() => {
                navigate(`/article/${rec.id}`);
              }}
            >
              {rec.title}
            </S.ThemeRecommendationButtonTitle>
          </S.ThemeRecommendationButtonWrapper>
        ))}
      </S.ThemeRecommendationWrapper>
    </S.ThemeRecommendationContainer>
  );
};

export default ThemeRecommendation;
