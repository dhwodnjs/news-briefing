import { styled } from "styled-components";

const ThemeRecommendationContainer = styled.div`
  grid-column: 1 / 2;
  grid-row: 2 / 3;

  display: grid;
  gap: 12px;
  // grid-template-columns: 1fr;
  // grid-template-rows: 1fr 3fr;
`;

const ThemeRecommendationWrapper = styled.div`
  grid-column: 1 / 2;
  grid-row: 2 / 3;

  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  gap: 12px;

  align-items: center;
  justify-content: center;
`;

const ThemeRecommendationButtonWrapper = styled.div`
  flex-shrink: 0;
  border: none;

  display: flex;
  position: relative;

  // align-items: center;
  // justify-content: center;
`;
const ThemeRecommendationButtonImage = styled.img`
  width: 100%;
  height: 100%;
  flex-shrink: 0;
  object-fit: cover;
  border-radius: 12px;
`;
const ThemeRecommendationButtonTitle = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  font-weight: bold;
  font-size: 25px;
`;

export {
  ThemeRecommendationContainer,
  ThemeRecommendationWrapper,
  ThemeRecommendationButtonWrapper,
  ThemeRecommendationButtonImage,
  ThemeRecommendationButtonTitle,
};
