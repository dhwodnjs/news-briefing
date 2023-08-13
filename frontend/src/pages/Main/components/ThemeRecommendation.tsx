import React from 'react';
import * as S from '../../styles';
import SectionTitle from '../../Common/SectionTitle';

interface ThemeRecommendationProps {
  theme: string;
}
/**
 * 테마별 추천 뉴스
 * For example in figma, middle bottom IT추천뉴스 component.
 * You need to specify button component.
 */
const ThemeRecommendation = ({ theme }: ThemeRecommendationProps) => {
  return (
    <S.ThemeRecommendationContainer>
      <SectionTitle text={theme + '추천 뉴스'} />
      <S.ThemeRecommendationWrapper>
        <S.ThemeRecommendationButton />
        <S.ThemeRecommendationButton />
      </S.ThemeRecommendationWrapper>
    </S.ThemeRecommendationContainer>
  );
};

export default ThemeRecommendation;
