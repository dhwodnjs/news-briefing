import React from 'react';
import * as S from '../styles';
import SectionTitle from './SectionTitle';

interface RecommendationItem {
  title: string;
  id: number;
  press: string;
}

/**
 * 추천 뉴스 컴포넌트
 * In figma, this component is located in the righ top component.
 * @returns 추천 뉴스 컴포넌트
 */
const UserRecommendations = () => {
  const defaultRecommendations: RecommendationItem[] = [];
  return (
    <S.RecommendationContainer>
      <SectionTitle text={'추천 뉴스'} />
      <S.RecommendationList>
        {defaultRecommendations.map((item) => (
          <S.RecommendationButton key={item.id}>
            <S.RecommendationPress>{item.press}</S.RecommendationPress>
            <S.RecommendationTitle>{item.title}</S.RecommendationTitle>
          </S.RecommendationButton>
        ))}
      </S.RecommendationList>
    </S.RecommendationContainer>
  );
};

export default UserRecommendations;
