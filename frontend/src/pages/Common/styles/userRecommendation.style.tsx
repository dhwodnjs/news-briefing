import { styled } from "styled-components";

const RecommendationContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 40px 1fr;
`;

const RecommendationList = styled.div`
  display: grid;
  background-color: white;
  border-radius: 10px;
  margin: 10px;
`;

/**
 * Inside Button, there are title and press
 * So I set as div not button
 */
const RecommendationButton = styled.div`
  padding: 10px;
`;

const RecommendationPress = styled.div`
  font-size: 13px;
`;

const RecommendationTitle = styled.div`
  font-size: 15px;

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
