/**
 * Section Title Style
 * EX. "오늘의 헤드라인", "추천 뉴스", "..."
 */

import { styled } from "styled-components";

const SectionTitleWrapper = styled.div`
  grid-column: 1 / 2;
  grid-row: 1 / 2;
  padding: 0 1rem;

  align-self: center;
`;

const SectionTitleText = styled.div`
  font-size: 20px;
  font-weight: 700;
`;

export { SectionTitleWrapper, SectionTitleText };
