import React from "react";
import * as S from "../../styles";
import SectionTitle from "../../Common/SectionTitle";
import { useSelector } from "react-redux";
import { selectThemeRecommendation } from "../../../redux/selector";

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

  return (
    <S.ThemeRecommendationContainer>
      <SectionTitle text={theme + " 추천 뉴스"} />
      <S.ThemeRecommendationWrapper>
        {DefaultRec.map((rec, index) => (
          <S.ThemeRecommendationButtonWrapper key={index}>
            <S.ThemeRecommendationButtonImage src={rec.image} />
            <S.ThemeRecommendationButtonTitle>
              {rec.title}
            </S.ThemeRecommendationButtonTitle>
          </S.ThemeRecommendationButtonWrapper>
        ))}
      </S.ThemeRecommendationWrapper>
    </S.ThemeRecommendationContainer>
  );
};

export default ThemeRecommendation;
