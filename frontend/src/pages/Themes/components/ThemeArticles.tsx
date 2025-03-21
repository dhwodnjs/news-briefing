import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import SectionTitle from "../../Common/SectionTitle";
import * as S from "../../styles";
import { useDispatch, useSelector } from "react-redux";
import { selectThemeArticles } from "../../../redux/selector";
// import { loadThemeArticles } from "../feature/handleThemes";
import { loadThemeArticles } from "../feature/handleThemes";
import { loadHeadline } from "../../Main/feature/handleHeadline";

const ThemeArticles = () => {
  const DefaultThemeArticles = useSelector(selectThemeArticles);
  const param = useParams().theme as string;

  const categories = [
    "IT과학",
    "경제",
    "사회",
    "생활문화",
    "세계",
    "오피니언",
    "정치",
  ];

  const theme_id = parseInt(param);
  const theme = categories[theme_id];

  const dispatch = useDispatch();

  const navigate = useNavigate();

  useEffect(() => {
    loadThemeArticles(theme_id, dispatch);
  }, [theme_id]);

  return (
    <S.themeArticlesContainer id="theme-articles-container">
      <SectionTitle text={theme + " 뉴스"} />
      <S.themeArticlesList id="theme-articles-list">
        {DefaultThemeArticles.map((article) => (
          <S.themeArticlesItem id="theme-articles-item" key={article.id}>
            <S.themeArticlesItemImage
              id="theme-articles-item-img"
              src={article.image}
            />
            <S.themeArticlesItemTitle
              id="theme-articles-item-title"
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
