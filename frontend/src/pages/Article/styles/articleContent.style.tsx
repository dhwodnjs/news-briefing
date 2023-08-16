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
  border-radius: 10px;
  margin: 10px;

  // background-color: red;
`;

const ArticleTitle = styled.div`
  grid-column: 1 / 2;
  grid-row: 1 / 2;
  font-size: 25px;
  align-self: center;

  margin-left: 15px;
  margin-right: 15px;
`;

const ArticleImage = styled.img`
  width: 470px;
  height: 250px;
  object-fit: cover;

  grid-column: 1 / 2;
  grid-row: 2 / 3;

  border-radius: 10px;
  margin-left: 15px;
  margin-right: 15px;
  margin-bottom: 10px;
  justify-self: center;
  align-self: center;
`;

const ArticleContent = styled.div`
  grid-column: 1 / 2;
  grid-row: 3 / 4;

  font-size: 18px;
  margin-left: 15px;
  margin-right: 15px;
  margin-top: 10px;
`;

export {
  ArticleContainer,
  ArticleWrapper,
  ArticleTitle,
  ArticleContent,
  ArticleImage,
};
