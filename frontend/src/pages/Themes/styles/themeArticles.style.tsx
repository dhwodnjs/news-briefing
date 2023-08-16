import { styled } from "styled-components";

const themeArticlesContainer = styled.div`
  grid-column: 2 / 3;
  grid-row: 2 / 4;

  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 40px 1fr;
`;

const themeArticlesList = styled.div`
  grid-column: 1 / 2;
  grid-row: 2 / 3;

  background-color: white;
  border-radius: 10px;
  padding: 10px;
  margin: 10px;
`;

const themeArticlesItem = styled.div`
  display: flex;
  flex-direction: row;

  margin-left: 30px;
  margin-bottom: 25px;
  margin-top: 25px;
  align-items: center;
`;

const themeArticlesItemTitle = styled.div`
  margin-left: 20px;
  font-size: 25px;

  &:hover {
    text-decoration: underline;
  }
`;

const themeArticlesItemImage = styled.img`
  width: 70px;
  height: 70px;
  border-radius: 10px;

  color: #ccc;
`;

export {
  themeArticlesContainer,
  themeArticlesList,
  themeArticlesItem,
  themeArticlesItemTitle,
  themeArticlesItemImage,
};
