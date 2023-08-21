import { styled } from "styled-components";

const themeArticlesContainer = styled.div`
  display: grid;

  grid-column: 2/3;
  grid-row: 2/4;
  grid-template-columns: 1fr;
  grid-template-rows: 40px minmax(0, 1fr);

  margin-right: 12px;
`;

const themeArticlesList = styled.div`
  grid-column: 1 / 2;
  grid-row: 2 / 3;

  background-color: white;
  border-radius: 12px;

  overflow: scroll;
`;

const themeArticlesItem = styled.div`
  display: flex;
  flex-direction: row;
  height: 60px;
  gap: 15px;

  padding-left: 10px;
  align-items: center;

  border-bottom: 1.5px solid #e5e5e5;
`;

const themeArticlesItemTitle = styled.div`
  font-size: 20px;
  white-space: nowrap;

  &:hover {
    text-decoration: underline;
  }
`;

const themeArticlesItemImage = styled.img`
  border-radius: 12px;
  color: #ccc;

  width: 50px;
  height: 50px;
`;

export {
  themeArticlesContainer,
  themeArticlesList,
  themeArticlesItem,
  themeArticlesItemTitle,
  themeArticlesItemImage,
};
