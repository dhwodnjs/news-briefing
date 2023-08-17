import React, { useEffect } from "react";
import * as S from "../../styles";
import SectionTitle from "../../Common/SectionTitle";
import { useNavigate } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { selectHeadline } from "../../../redux/selector";
import { requestHeadline } from "../../../requests/requestHeadline";
import { setHeadline } from "../../../redux/headline.slice";

/**
 * 오늘의 헤드라인 컴포넌트
 */
const TodayHeadline = () => {
  const defaultHeadline = useSelector(selectHeadline);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {}, [dispatch]);

  return (
    <S.TodayHeadLineContainer>
      <SectionTitle text={"오늘의 헤드dd라인"} />
      <S.TodayHeadLineWrapper>
        <S.TodayHeadLineImage
          src={defaultHeadline.image}
        ></S.TodayHeadLineImage>
        <S.TodayHeadlineInfo>
          <S.TodayHeadlineTags>
            {defaultHeadline.tags?.map((tag, index) => (
              <S.TodayHeadlineTagsItem key={index}>
                {tag}
              </S.TodayHeadlineTagsItem>
            ))}
          </S.TodayHeadlineTags>
          {/* <S.TodayHeadlineLikes> {defaultHeadline.likes} </S.TodayHeadlineLikes> */}
        </S.TodayHeadlineInfo>
        <S.TodayHeadlineTitle
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
