import { styled } from "styled-components";

const ThemeRecommendationContainer = styled.div`
  grid-column: 1 / 2;
  grid-row: 2 / 3;

  display: grid;
  grid-template-rows: minmax(0, 40px) minmax(0, 1fr);
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

  overflow: hidden;
`;

const ThemeRecommendationButtonWrapper = styled.div`
  flex-shrink: 0;
  border: none;

  display: flex;
  position: relative;
  overflow: hidden;

  background-color: white;
  width: 100%;
  height: 100%;
`;
const ThemeRecommendationButtonImage = styled.img`
  flex-shrink: 0;
  object-fit: cover;
  border-radius: 12px;

  width: 100%;
  height: 100%;

  filter: brightness(50%);
`;
const ThemeRecommendationButtonTitle = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  font-weight: bold;
  font-size: 18px;
  width: 80%;

  &:hover {
    text-decoration: underline;
  }
`;

export {
  ThemeRecommendationContainer,
  ThemeRecommendationWrapper,
  ThemeRecommendationButtonWrapper,
  ThemeRecommendationButtonImage,
  ThemeRecommendationButtonTitle,
};
