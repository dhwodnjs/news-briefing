import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import SectionTitle from "../../Common/SectionTitle";
import * as S from "../../styles";
import { useSelector } from "react-redux";
import { selectThemeArticles } from "../../../redux/selector";

interface ThemeArticlesProps {
  theme: string;
  articles: Array<{
    id: number;
    title: string;
    image: string;
  }>;
}

const ThemeArticles = () => {
  const DefaultThemeArticles = useSelector(selectThemeArticles);
  const params = useParams();
  console.log(params);
  const theme = params.theme;

  const navigate = useNavigate();
  // console.log(theme);
  // console.log(DefaultThemeArticles);
  // DefaultThemeArticles.map((article) => console.log(article.theme === ));

  const DefaultThemeArticle = DefaultThemeArticles.filter(
    (article) => article.theme === theme,
  )[0];

  return (
    <S.themeArticlesContainer>
      <SectionTitle text={DefaultThemeArticle.theme + " 뉴스"} />
      <S.themeArticlesList>
        {DefaultThemeArticle.articles.map((article) => (
          <S.themeArticlesItem key={article.id}>
            <S.themeArticlesItemImage src={article.image} />
            <S.themeArticlesItemTitle
              onClick={() => {
                navigate(`/article/${article.id}`);
              }}
            >
              {article.title}
            </S.themeArticlesItemTitle>
          </S.themeArticlesItem>
        ))}
      </S.themeArticlesList>
    </S.themeArticlesContainer>
  );
};

export default ThemeArticles;
