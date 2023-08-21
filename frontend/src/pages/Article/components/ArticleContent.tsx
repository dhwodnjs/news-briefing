import SectionTitle from "../../Common/SectionTitle";
import * as S from "../../styles";
import { playAudio } from "../../../features/audio/playAudio";
import { requestAudio } from "../../../requests/requestAudio";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { loadArticle, summarizeArticle } from "../feature/handleArticle";
import { useDispatch, useSelector } from "react-redux";
import { selectArticle } from "../../../redux/selector";

interface ArticleContentProps {
  title: string;
  image: string;
  content: string;
}

const ArticleContent = () => {
  const [audioData, setAudioData] = useState<ArrayBuffer | null>(null);

  const article = useSelector(selectArticle);
  const param = useParams().id as string;
  const article_id = parseInt(param);
  const dispatch = useDispatch();

  useEffect(() => {
    loadArticle(article_id, dispatch);
  }, [article_id]);

  // 일단 보류
  // useEffect(() => {
  //   if (article.content) {
  //     summarizeArticle(article.content, dispatch);
  //   }
  // }, [article.content]);

  // ------------------------------

  // article.content 반영이 한 템포 늦는 것 같음.
  // react 공부 .. .합시다..^^

  // useEffect(() => {
  //   if (article.content) {
  //     const fetchData = async () => {
  //       console.log(article.content);
  //       const data = await requestAudio(article.content);
  //       setAudioData(data);
  //     };

  //     fetchData();
  //   }
  // }, [article_id]);

  // useEffect(() => {
  //   if (audioData) {
  //     const cleanup = playAudio(audioData);
  //     return cleanup; // This will be called if the component unmounts
  //   }
  // }, [audioData]);

  return (
    <S.ArticleContainer id="article-container">
      <SectionTitle text="뉴스" />
      <S.ArticleWrapper id="article-wrapper">
        <S.ArticleTitle id="article-title">{article.title}</S.ArticleTitle>
        <S.ArticleImageWrapper id="article-image-wrapper">
          <S.ArticleImage id="article-img" src={article.image} />
        </S.ArticleImageWrapper>
        <S.ArticleContent id="article-content">
          {" "}
          {article.content}{" "}
        </S.ArticleContent>
      </S.ArticleWrapper>
    </S.ArticleContainer>
  );
};

export default ArticleContent;
