import { styled } from "styled-components";

const ThemeRecommendationContainer = styled.div`
  grid-column: 1 / 2;
  grid-row: 2 / 3;

  display: grid;
  // grid-template-columns: 1fr;
  // grid-template-rows: 40px 1fr;
`;

const ThemeRecommendationWrapper = styled.div`
  grid-column: 1 / 2;
  grid-row: 2 / 3;

  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  margin-left: 10px;
  margin-right: 10px;

  align-items: center;
  justify-content: center;
`;

const ThemeRecommendationButtonWrapper = styled.div`
  flex-shrink: 0;
  border: none;

  display: flex;
  margin-left: 5px;
  margin-right: 5px;
  position: relative;

  // align-items: center;
  // justify-content: center;
`;
const ThemeRecommendationButtonImage = styled.img`
  width: 230px;
  height: 120px;
  flex-shrink: 0;
  object-fit: cover;
  border-radius: 10px;
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
