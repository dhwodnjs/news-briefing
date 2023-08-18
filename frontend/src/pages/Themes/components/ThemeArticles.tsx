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
  const params = useParams();

  // const theme = categories[parseInt(params)]; //parseInt(params.theme);ㅜ,ㅜ

  const categories = [
    "IT과학",
    "경제",
    "사회",
    "생활문화",
    "세계",
    "오피니언",
    "정치",
  ];
  const theme_id = 3; // 일단..
  const theme = categories[theme_id];

  const dispatch = useDispatch();

  const navigate = useNavigate();

  // theme에 해당하는 뉴스 가져와서, theme에 저장 (set)

  useEffect(() => {
    loadThemeArticles(theme_id, dispatch);
    // loadHeadline(dispatch);
  }, []);

  return (
    <S.themeArticlesContainer>
      <SectionTitle text={theme + " 뉴스"} />
      <S.themeArticlesList>
        {DefaultThemeArticles.map((article) => (
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
