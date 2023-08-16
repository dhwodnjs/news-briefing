import { styled } from "styled-components";

const TodayHeadLineContainer = styled.div`
  grid-column: 1 / 2;
  grid-row: 1 / 2;

  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 40px 1fr;
`;

const TodayHeadLineWrapper = styled.div`
  grid-column: 1 / 2;
  grid-row: 2 / 3;

  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 7fr 1fr 2fr;
  background-color: white;
  border-radius: 10px;
  margin: 10px;
`;

const TodayHeadLineImage = styled.img`
  grid-column: 1 / 3;
  grid-row: 1 / 2;

  width: 470px;
  height: 230px;
  object-fit: cover;

  border-radius: 10px;
  margin-top: 15px;
  justify-self: center;
`;

/**
 * Wrapper for TodayHeadlineTags, TodayHeadlineLikes
 */
const TodayHeadlineInfo = styled.div`
  grid-column: 1 / 3;
  grid-row: 2 / 3;

  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
`;

const TodayHeadlineTags = styled.div`
  grid-column: 1 / 2;
  grid-row: 1 / 2;

  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding-left: 15px;
`;

const TodayHeadlineTagsItem = styled.div`
  border: 1px solid black;
  height: 25px;
  padding: 0 10px;
  margin-right: 5px;
  background-color: white;
  font-size: 10px;
  font-weight: 500;
  background-color: #fef1f3;
  color: #ff336d;
  border-radius: 5px;
  border: none;
  line-height: 25px; // ???
`;

const TodayHeadlineLikes = styled.div`
  grid-column: 2 / 3;
  grid-row: 1 / 2;

  align-self: center;
  justify-self: flex-end;
  margin-right: 30px;
  font-size: 12px;
  font-weight: 500;
`;

const TodayHeadlineTitle = styled.div`
  grid-column: 1 / 3;
  grid-row: 3 / 4;
  padding: 10px;
  margin-left: 10px;

  font-size: 20px;

  &:hover {
    text-decoration: underline;
  }
`;

export {
  TodayHeadLineContainer,
  TodayHeadLineWrapper,
  TodayHeadLineImage,
  TodayHeadlineInfo,
  TodayHeadlineTags,
  TodayHeadlineTagsItem,
  TodayHeadlineLikes,
  TodayHeadlineTitle,
};
