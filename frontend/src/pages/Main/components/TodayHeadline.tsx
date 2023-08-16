import React from "react";
import * as S from "../../styles";
import SectionTitle from "../../Common/SectionTitle";
import { useNavigate } from "react-router-dom";

interface HeadlineItem {
  id: number;
  title: string;
  tags: string[];
  likes: string;
  image: string;
}

/**
 * 오늘의 헤드라인 컴포넌트
 */
const TodayHeadline = () => {
  const defaultHeadline: HeadlineItem = {
    id: 0,
    title: "KT, 전국 군부대 2000곳 초고속 통신망으로 잇는다…내년 완공",
    tags: ["#태그1", "#태그2", "#태그3"],
    likes: "👀 1.5M ☁️ 35K",
    image: process.env.PUBLIC_URL + `/image/image1.jpg`,
  };

  const navigate = useNavigate();

  return (
    <S.TodayHeadLineContainer>
      <SectionTitle text={"오늘의 헤드라인"} />
      <S.TodayHeadLineWrapper>
        <S.TodayHeadLineImage
          src={defaultHeadline.image}
        ></S.TodayHeadLineImage>
        <S.TodayHeadlineInfo>
          <S.TodayHeadlineTags>
            {defaultHeadline.tags.map((tag, index) => (
              <S.TodayHeadlineTagsItem key={index}>
                {tag}
              </S.TodayHeadlineTagsItem>
            ))}
          </S.TodayHeadlineTags>
          <S.TodayHeadlineLikes> {defaultHeadline.likes} </S.TodayHeadlineLikes>
        </S.TodayHeadlineInfo>
        <S.TodayHeadlineTitle
          onClick={() => {
            navigate("/article");
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
