import React, { useEffect } from "react";
import * as S from "../../styles";
import SectionTitle from "../../Common/SectionTitle";
import { useNavigate } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { selectHeadline } from "../../../redux/selector";
import { loadHeadline } from "../feature/handleHeadline";

/**
 * 오늘의 헤드라인 컴포넌트
 */
const TodayHeadline = () => {
  const defaultHeadline = useSelector(selectHeadline);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    loadHeadline(dispatch);
  }, []);

  return (
    <S.TodayHeadLineContainer id="today-headline-container">
      <SectionTitle text={"오늘의 헤드라인"} />
      <S.TodayHeadLineWrapper id="today-headline-wrapper">
        <S.TodayHeadlineImageWrapper id="today-headline-image-wrapper">
          <S.TodayHeadLineImage
            id="today-headline-image"
            src={defaultHeadline.image}
          />
        </S.TodayHeadlineImageWrapper>
        <S.TodayHeadlineInfo id="today-headline-info">
          <S.TodayHeadlineTags id="today-headline-tags">
            {defaultHeadline.tags?.map((tag, index) => (
              <S.TodayHeadlineTagsItem key={index} id="today-healine-tag-item">
                {tag}
              </S.TodayHeadlineTagsItem>
            ))}
          </S.TodayHeadlineTags>
          {/* <S.TodayHeadlineLikes> {defaultHeadline.likes} </S.TodayHeadlineLikes> */}
        </S.TodayHeadlineInfo>
        <S.TodayHeadlineTitle
          id="today-headline-title"
          onClick={() => {
            navigate(`/article/${defaultHeadline.id}`);
          }}
        >
          {" "}
          {defaultHeadline.title}{" "}
        </S.TodayHeadlineTitle>
      </S.TodayHeadLineWrapper>
    </S.TodayHeadLineContainer>
  );
};

export default TodayHeadline;
