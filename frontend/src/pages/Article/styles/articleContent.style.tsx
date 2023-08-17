import { styled } from "styled-components";

const ArticleContainer = styled.div`
  grid-column: 1 / 2;
  grid-row: 1 / 3;

  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 40px 1fr;
`;

const ArticleWrapper = styled.div`
  grid-column: 1 / 2;
  grid-row: 2 / 3;

  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 3fr 3fr;
  background-color: white;
  border-radius: 12px;

  // background-color: red;
`;

const ArticleTitle = styled.div`
  grid-column: 1 / 2;
  grid-row: 1 / 2;
  font-size: 25px;
  align-self: center;
`;

const ArticleImage = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
  grid-column: 1 / 2;
  grid-row: 2 / 3;

  border-radius: 12px;

  justify-self: center;
  align-self: center;
`;

const ArticleContent = styled.div`
  grid-column: 1 / 2;
  grid-row: 3 / 4;

  font-size: 18px;
`;

export {
  ArticleContainer,
  ArticleWrapper,
  ArticleTitle,
  ArticleContent,
  ArticleImage,
};
