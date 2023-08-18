import { styled } from "styled-components";

/**
 * 1. Container Title
 * 2. Container List
 */
const CategoriesContainer = styled.div`
  grid-column: 1 / 2;
  grid-row: 3 / 4;

  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 50px 1fr;
  background-color: white;

  border-radius: 12px;
  margin-left: 12px;
`;

const CategoriesTitle = styled.div`
  grid-column: 1 / 2;
  grid-row: 1 / 2;
  display: flex;
  align-items: center;
  padding: 1rem;

  font-weight: 600;
`;

const CategoriesList = styled.div`
  grid-column: 1 / 2;
  grid-row: 2 / 3;
  gap: 12px;

  display: flex;
  flex-direction: column;
  align-items: flex-start;

  padding-left: 16px;
`;

const CategoriesItemButton = styled.div`
  color: black;
  border: none;
  cursor: pointer;
  background-color: white;

  &:hover {
    color: gray;
  }
`;

export {
  CategoriesContainer,
  CategoriesTitle,
  CategoriesList,
  CategoriesItemButton,
};
