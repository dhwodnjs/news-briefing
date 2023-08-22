import { styled } from "styled-components";

const TodayHeadLineContainer = styled.div`
  grid-column: 1 / 2;
  grid-row: 1 / 2;

  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: minmax(0, 40px) minmax(0, 1fr);
`;

const TodayHeadLineWrapper = styled.div`
  grid-column: 1 / 2;
  grid-row: 2 / 3;

  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: minmax(50px, 7fr) minmax(0px, 0.5fr) minmax(50px, 1fr);
  background-color: white;
  border-radius: 12px;

  margin: 0;
  transition:
    margin 0.2s ease-in-out,
    box-shadow 0.2s ease-in-out,
    font-size 0.2s ease-in-out,
    font-weight 0.2s ease-in-out;

  &:hover {
    cursor: pointer;
    box-shadow: 0px 6px 8px rgba(0, 0, 0, 0.1);
    margin: -3px;
  }
`;

const TodayHeadlineImageWrapper = styled.div`
  position: relative;
  overflow: hidden;
  grid-column: 1 / 3;
  border-radius: 12px;
  margin: 10px;
`;

const TodayHeadLineImage = styled.img`
  justify-self: center;
  align-self: center;

  object-fit: contain;
  overflow: hidden;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  min-width: 100%;
  min-height: 100%;
  max-width: 100%; /* Override any existing max-width */
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
`;

const TodayHeadlineTagsItem = styled.div`
  border: 1px solid black;
  height: 25px;
  background-color: white;
  font-size: 12px;
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
  font-size: 12px;
  font-weight: 500;
`;

const TodayHeadlineTitle = styled.div`
  grid-column: 1 / 3;
  grid-row: 3 / 4;
  padding: 12px;

  font-size: 18px;
  white-space: nowrap;
  &:hover {
    text-decoration: underline;
  }
  overflow: hidden;
`;

export {
  TodayHeadLineContainer,
  TodayHeadLineWrapper,
  TodayHeadlineImageWrapper,
  TodayHeadLineImage,
  TodayHeadlineInfo,
  TodayHeadlineTags,
  TodayHeadlineTagsItem,
  TodayHeadlineLikes,
  TodayHeadlineTitle,
};
