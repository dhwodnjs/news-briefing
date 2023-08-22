import { styled } from "styled-components";

/**
 * 1. Container Title
 * 2. Container List
 */
const CategoriesContainer = styled.div`
  grid-column: 1 / 2;

  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 50px 1fr;
  background-color: white;

  border-radius: 12px;
  margin-left: 12px;

  transition:
    margin 0.2s ease-in-out,
    box-shadow 0.2s ease-in-out,
    font-size 0.2s ease-in-out,
    font-weight 0.2s ease-in-out;

  &:hover {
    cursor: pointer;
    box-shadow: 0px 6px 8px rgba(0, 0, 0, 0.1);
    margin: -3px;
    margin-left: 9px;
  }
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
