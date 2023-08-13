import React from 'react';
import * as S from '../styles';

interface SectionTitleProps {
  text: string;
}

/**
 * Section Title Style
 * EX. "오늘의 헤드라인", "추천 뉴스", "..."
 * Needs text parameter
 */
const SectionTitle = ({ text }: SectionTitleProps) => {
  return (
    <S.SectionTitleWrapper>
      <S.SectionTitleText>{text}</S.SectionTitleText>
    </S.SectionTitleWrapper>
  );
};

export default SectionTitle;
