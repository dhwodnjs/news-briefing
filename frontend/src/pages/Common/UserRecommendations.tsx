import React, { useEffect } from "react";
import * as S from "../styles";
import SectionTitle from "./SectionTitle";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectRecommendation } from "../../redux/selector";
import { loadUserRecommendation } from "./feature/handleUserRecommendation";

// interface RecommendationItem {
//   title: string;
//   id: number;
//   press: string;
// }

/**
 * 추천 뉴스 컴포넌트
 * In figma, this component is located in the righ top component.
 * @returns 추천 뉴스 컴포넌트
 */
const UserRecommendations = () => {
  const dispatch = useDispatch();
  const defaultRecommendations = useSelector(selectRecommendation);

  useEffect(() => {
    loadUserRecommendation(dispatch);
  }, []);

  const navigate = useNavigate();

  return (
    <S.RecommendationContainer id="recommendaiton-container">
      <SectionTitle text={"추천 뉴스"} />
      <S.RecommendationList id="recommendation-list">
        {defaultRecommendations.map((item, index) => (
          <S.RecommendationButton
            id="recommendation-button"
            key={index}
            onClick={() => {
              "/article";
            }}
          >
            <S.RecommendationPress id="recommendation-press">
              {item.press}
            </S.RecommendationPress>
            <S.RecommendationTitle
              id="recommedation-title"
              onClick={() => {
                navigate(`/article/${item.id}`);
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
