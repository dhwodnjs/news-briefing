import React from "react";
import * as S from "../styles";
import SectionTitle from "./SectionTitle";
import { useNavigate } from "react-router-dom";

interface RecommendationItem {
  title: string;
  id: number;
  press: string;
}

/**
 * 추천 뉴스 컴포넌트
 * In figma, this component is located in the righ top component.
 * @returns 추천 뉴스 컴포넌트
 */
const UserRecommendations = () => {
  const defaultRecommendations: RecommendationItem[] = [
    {
      title: "코로나19 신규 확진 1,100명대…사흘째 1천명대",
      id: 1,
      press: "[연합뉴스]",
    },
    {
      title: "코로나19 신규 확진 1,100명대…사흘째 1천명대",
      id: 2,
      press: "[연합뉴스]",
    },
    {
      title: "코로나19 신규 확진 1,100명대…사흘째 1천명대",
      id: 3,
      press: "[연합뉴스]",
    },
    {
      title: "코로나19 신규 확진 1,100명대…사흘째 1천명대",
      id: 4,
      press: "[연합뉴스]",
    },
  ];

  const navigate = useNavigate();

  return (
    <S.RecommendationContainer>
      <SectionTitle text={"추천 뉴스"} />
      <S.RecommendationList>
        {defaultRecommendations.map((item) => (
          <S.RecommendationButton
            key={item.id}
            onClick={() => {
              "/article";
            }}
          >
            <S.RecommendationPress>{item.press}</S.RecommendationPress>
            <S.RecommendationTitle
              onClick={() => {
                navigate("/article");
              }}
            >
              {item.title}
            </S.RecommendationTitle>
          </S.RecommendationButton>
        ))}
      </S.RecommendationList>
    </S.RecommendationContainer>
  );
};

export default UserRecommendations;
