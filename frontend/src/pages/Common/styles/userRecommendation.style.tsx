import { styled } from "styled-components";

const RecommendationContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 40px 1fr;
`;

const RecommendationList = styled.div`
  display: grid;
  grid-template-rows: repeat(4, minmax(0, 1fr));
  background-color: white;
  border-radius: 12px;
  overflow: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;

/**
 * Inside Button, there are title and press
 * So I set as div not button
 */
const RecommendationButton = styled.div`
  white-space: nowrap;
  padding: 12px;
  padding-right: 16px;
  overflow: hidden;

  display: flex;
  flex-direction: column;
  justify-content: center;

  &:not(:last-child)::after {
    content: "";
    border-bottom: 1.5px solid #e5e5e5;
    bottom: -38%;
    position: relative;
    background-color: #e5e5e5;
  }
`;

const RecommendationPress = styled.div`
  font-size: 13px;
`;

const RecommendationTitle = styled.div`
  font-size: 18px;
  overflow: hidden;
  padding-right: 12px;

  &:hover {
    text-decoration: underline;
  }
`;

export {
  RecommendationContainer,
  RecommendationList,
  RecommendationButton,
  RecommendationPress,
  RecommendationTitle,
};
