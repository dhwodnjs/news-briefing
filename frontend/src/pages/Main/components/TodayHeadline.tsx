import React from 'react';
import * as S from '../../styles';
import SectionTitle from '../../Common/SectionTitle';

/**
 * 오늘의 헤드라인 컴포넌트
 */
const TodayHeadline = () => {
  return (
    <S.TodayHeadLineContainer>
      <SectionTitle text={'오늘의 헤드라인'} />
      <S.TodayHeadLineWrapper>
        <S.TodayHeadLineImage />
        <S.TodayHeadlineInfo>
          <S.TodayHeadlineTags />
          <S.TodayHeadlineLikes />
        </S.TodayHeadlineInfo>
        <S.TodayHeadlineTitle />
      </S.TodayHeadLineWrapper>
    </S.TodayHeadLineContainer>
  );
};

export default TodayHeadline;
