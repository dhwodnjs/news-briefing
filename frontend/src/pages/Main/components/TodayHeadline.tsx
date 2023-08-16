import React, { useEffect } from "react";
import * as S from "../../styles";
import SectionTitle from "../../Common/SectionTitle";
import { useNavigate } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { selectHeadline } from "../../../redux/selector";
import { requestHeadline } from "../../../requests/requestHeadline";
import {
  fetchedSuccessfully,
  startFetching,
} from "../../../redux/headline.slice";

interface HeadlineItem {
  id: number;
  title: string;
  tags?: string[];
  likes?: string;
  image: string;
}

/**
 * 오늘의 헤드라인 컴포넌트
 */
const TodayHeadline = () => {
  const defaultHeadline = useSelector(selectHeadline);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [headline, setHeadline] = React.useState<HeadlineItem>({
    id: 0,
    title: "",
    tags: [],
    likes: "",
    image: "",
  });

  useEffect(() => {
    const fetchHeadline = async () => {
      try {
        dispatch(startFetching());
        const data = await requestHeadline();
        const converted = JSON.parse(data);
        const news = converted.news;
        setHeadline({
          id: news[0]._id,
          title: news[0].title,
          image: news[0].image,
        });
        dispatch(fetchedSuccessfully(data));
      } catch (error) {
        console.log(error);
      }
    };

    fetchHeadline();
  }, [dispatch]);

  return (
    <S.TodayHeadLineContainer>
      <SectionTitle text={"오늘의 헤드라인"} />
      <S.TodayHeadLineWrapper>
        <S.TodayHeadLineImage src={headline.image}></S.TodayHeadLineImage>
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
          {headline.title}{" "}
        </S.TodayHeadlineTitle>
      </S.TodayHeadLineWrapper>
    </S.TodayHeadLineContainer>
  );
};

export default TodayHeadline;
