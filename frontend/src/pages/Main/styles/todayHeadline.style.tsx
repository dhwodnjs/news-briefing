import { styled } from 'styled-components';

const TodayHeadLineContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr;
`;

const TodayHeadLineWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
`;

const TodayHeadLineImage = styled.img``;

/**
 * Wrapper for TodayHeadlineTags, TodayHeadlineLikes
 */
const TodayHeadlineInfo = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
`;

const TodayHeadlineTags = styled.div``;

const TodayHeadlineLikes = styled.div``;

const TodayHeadlineTitle = styled.div``;

export {
  TodayHeadLineContainer,
  TodayHeadLineWrapper,
  TodayHeadLineImage,
  TodayHeadlineInfo,
  TodayHeadlineTags,
  TodayHeadlineLikes,
  TodayHeadlineTitle,
};
