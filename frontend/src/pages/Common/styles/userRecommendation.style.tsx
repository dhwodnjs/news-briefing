import { styled } from 'styled-components';

const RecommendationContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 3fr;
`;

const RecommendationList = styled.div`
  display: grid;
  grid-template-columns: 1fr;
`;

/**
 * Inside Button, there are title and press
 * So I set as div not button
 */
const RecommendationButton = styled.div``;

const RecommendationPress = styled.div``;

const RecommendationTitle = styled.div``;

export {
  RecommendationContainer,
  RecommendationList,
  RecommendationButton,
  RecommendationPress,
  RecommendationTitle,
};
