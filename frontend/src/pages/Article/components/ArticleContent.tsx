import SectionTitle from "../../Common/SectionTitle";
import * as S from "../../styles";
import { playAudio } from "../../../features/audio/playAudio";
import { requestAudio } from "../../../requests/requestAudio";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { loadArticleSummary } from "../feature/handleArticle";
import { SyncLoader } from "react-spinners";

const defaultArticle = {
  id: 1000000000,
  title: "로딩중",
  image:
    "https://ssl.pstatic.net/static.news/image/news/ogtag/navernews_800x420_20221201.jpg",
  content: "로딩중",
};

const ArticleContent = () => {
  const [audioData, setAudioData] = useState<ArrayBuffer | null>(null);
  const [articleData, setArticleData] = useState(defaultArticle);

  const param = useParams().id as string;
  const article_id = parseInt(param);

  useEffect(() => {
    setArticleData(defaultArticle);
    loadArticleSummary(article_id).then((article) => {
      setArticleData({
        id: article.id,
        title: article.title,
        image: article.image,
        content: article.body,
      });
    });
  }, [article_id]);

  useEffect(() => {
    console.log(articleData.content);
    const fetchAudio = async () => {
      if (articleData.content === "로딩중") return;
      const data = await requestAudio(articleData.content); // 일단 호출 안하도록
      setAudioData(data);
    };
    fetchAudio();
  }, [articleData.content]);

  useEffect(() => {
    if (audioData) {
      const cleanup = playAudio(audioData); // 일단 호출 안하도록
      return cleanup;
    }
  }, [audioData]);

  return (
    <S.ArticleContainer id="article-container">
      <SectionTitle text="뉴스" />
      {articleData.content === "로딩중" ? (
        <S.ArticleWrapper id="article-wrapper">
          <S.ArticleLoaderWrapper id="article-loader-wrapper">
            <SyncLoader color="#A9A9A9" size={20} />
          </S.ArticleLoaderWrapper>
        </S.ArticleWrapper>
      ) : (
        <S.ArticleWrapper id="article-loader-wrapper">
          <S.ArticleTitle id="article-title">
            {articleData.title}
          </S.ArticleTitle>
          <S.ArticleImageWrapper id="article-image-wrapper">
            <S.ArticleImage id="article-img" src={articleData.image} />
          </S.ArticleImageWrapper>
          <S.ArticleContent id="article-content">
            {" "}
            {articleData.content}{" "}
          </S.ArticleContent>
        </S.ArticleWrapper>
      )}
    </S.ArticleContainer>
  );
};

export default ArticleContent;
