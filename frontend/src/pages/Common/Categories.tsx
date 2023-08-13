import React from 'react';
import * as S from '../styles';

interface CategoryItem {
  name: string;
}

const defaultCategories: CategoryItem[] = [];

const Categories = () => {
  /**
   * Categories should contain list of categories.
   * Categories are clickable.
   * Use css grid to display categories.
   * For example in figma, leftmost component containing theme categories. ex. 정치, 경제, 사회, 생활/문화, 세계, IT/과학
   */
  return (
    <S.CategoriesContainer>
      <S.CategoriesTitle>Categories</S.CategoriesTitle>
      <S.CategoriesList>
        {defaultCategories.map((category, index) => (
          <S.CategoriesItemButton key={index}>
            {category.name}
          </S.CategoriesItemButton>
        ))}
      </S.CategoriesList>
    </S.CategoriesContainer>
  );
};

export default Categories;
