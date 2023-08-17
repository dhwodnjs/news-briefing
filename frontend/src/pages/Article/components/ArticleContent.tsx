import SectionTitle from "../../Common/SectionTitle";
import * as S from "../../styles";
import { playAudio } from "../../../features/audio/playAudio";
import { requestAudio } from "../../../requests/requestAudio";
import { useEffect, useState } from "react";

interface ArticleContentProps {
  title: string;
  image: string;
  content: string;
}

const ArticleContent = () => {
  // id 받아와서, 해당 id에 맞는 article 불러와야 함 ..
  const [audioData, setAudioData] = useState<ArrayBuffer | null>(null);

  const DefaultArticle: ArticleContentProps = {
    title: "[경향신문] KT “한화, 하나도 안 무섭다”",
    image: process.env.PUBLIC_URL + `/image/image1.jpg`,
    content:
      "KT는 9일 수원 KT위즈파크에서 열린 한화전에서 13안타 4볼넷을 엮어 12-6으로 이겼다. 1-5로 뒤진 4회 3점, 5회 6점, 7회 2점을 뽑는 매서운 타격으로 뒤집었다. ",
  };

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const data = await requestAudio(
  //       "KT는 9일 수원 KT위즈파크에서 열린 한화전에서 13안타 4볼넷을 엮어 12-6으로 이겼다. 1-5로 뒤진 4회 3점, 5회 6점, 7회 2점을 뽑는 매서운 타격으로 뒤집었다.",
  //     );
  //     setAudioData(data);
  //   };

  //   fetchData();
  // }, []);

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
        <S.ArticleTitle id="article-title">
          {DefaultArticle.title}
        </S.ArticleTitle>
        <S.ArticleImage id="article-img" src={DefaultArticle.image} />
        <S.ArticleContent id="article-content">
          {" "}
          {DefaultArticle.content}{" "}
        </S.ArticleContent>
      </S.ArticleWrapper>
    </S.ArticleContainer>
  );
};

export default ArticleContent;
