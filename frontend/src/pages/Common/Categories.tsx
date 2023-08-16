import React from "react";
import * as S from "../styles";
import { useNavigate } from "react-router-dom";

interface CategoryItem {
  name: string;
}

const defaultCategories: CategoryItem[] = [
  { name: "정치" },
  { name: "경제" },
  { name: "사회" },
  { name: "생활/문화" },
  { name: "세계" },
  { name: "IT/과학" },
  { name: "test" },
];

const Categories = () => {
  /**
   * Categories should contain list of categories.
   * Categories are clickable.
   * Use css grid to display categories.
   * For example in figma, leftmost component containing theme categories. ex. 정치, 경제, 사회, 생활/문화, 세계, IT/과학
   */

  const navigate = useNavigate();

  return (
    <S.CategoriesContainer>
      <S.CategoriesTitle>Categories</S.CategoriesTitle>
      <S.CategoriesList>
        {defaultCategories.map((category, index) => (
          <S.CategoriesItemButton
            key={index}
            onClick={() => {
              navigate(`/themes/${category.name}`);
            }}
          >
            {category.name}
          </S.CategoriesItemButton>
        ))}
      </S.CategoriesList>
    </S.CategoriesContainer>
  );
};

export default Categories;
