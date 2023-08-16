import React from "react";
import { useNavigate } from "react-router-dom";
import SectionTitle from "../../Common/SectionTitle";
import * as S from "../../styles";

interface ThemeArticlesProps {
  theme: string;
  articles: Array<{
    id: number;
    title: string;
    image: string;
  }>;
}

const ThemeArticles = () => {
  const DefaultThemeArticles: ThemeArticlesProps = {
    theme: "경제",
    articles: [
      {
        id: 1,
        title: "KT 지니TV케어, 진도군 독거노인 치매·고독사 예방한다",
        image: process.env.PUBLIC_URL + `/image/image1.jpg`,
      },
      {
        id: 2,
        title: "KT, 차기 국방광대역통합망 구축 민간투자 사업 본격화",
        image: process.env.PUBLIC_URL + `/image/image1.jpg`,
      },
      {
        id: 3,
        title: "KT엠모바일, 해외유심 브랜드 ‘심크루’ 선봬",
        image: process.env.PUBLIC_URL + `/image/image1.jpg`,
      },
      {
        id: 4,
        title: "KT·SKT·LGU+, 태풍 북상에 비상대응체제 돌입",
        image: process.env.PUBLIC_URL + `/image/image1.jpg`,
      },
      {
        id: 5,
        title: "프로야구 KT, 조기 퇴영한 미국·캐나다 잼버리 대원 초청",
        image: process.env.PUBLIC_URL + `/image/image1.jpg`,
      },
    ],
  };

  const navigate = useNavigate();

  return (
    <S.themeArticlesContainer>
      <SectionTitle text={DefaultThemeArticles.theme + " 뉴스"} />
      <S.themeArticlesList>
        {DefaultThemeArticles.articles.map((article) => (
          <S.themeArticlesItem key={article.id}>
            <S.themeArticlesItemImage src={article.image} />
            <S.themeArticlesItemTitle
              onClick={() => {
                navigate("/article");
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
