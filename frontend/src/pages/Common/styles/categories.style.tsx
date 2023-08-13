import { styled } from 'styled-components';

/**
 * 1. Container Title
 * 2. Container List
 */
const CategoriesContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr;
`;

const CategoriesTitle = styled.div``;

const CategoriesList = styled.div``;

const CategoriesItemButton = styled.button``;

export {
  CategoriesContainer,
  CategoriesTitle,
  CategoriesList,
  CategoriesItemButton,
};
