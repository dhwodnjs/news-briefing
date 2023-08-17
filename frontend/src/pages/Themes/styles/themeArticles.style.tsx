import { styled } from "styled-components";

const themeArticlesContainer = styled.div`
  grid-column: 2 / 3;
  grid-row: 2 / 4;

  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 3fr;
`;

const themeArticlesList = styled.div`
  grid-column: 1 / 2;
  grid-row: 2 / 3;

  background-color: white;
  border-radius: 12px;
`;

const themeArticlesItem = styled.div`
  display: flex;
  flex-direction: row;

  align-items: center;
`;

const themeArticlesItemTitle = styled.div`
  font-size: 25px;

  &:hover {
    text-decoration: underline;
  }
`;

const themeArticlesItemImage = styled.img`
  border-radius: 12px;

  color: #ccc;
`;

export {
  themeArticlesContainer,
  themeArticlesList,
  themeArticlesItem,
  themeArticlesItemTitle,
  themeArticlesItemImage,
};
