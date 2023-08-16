import SectionTitle from "../../Common/SectionTitle";
import * as S from "../../styles";

interface ArticleContentProps {
  title: string;
  image: string;
  content: string;
}

const ArticleContent = () => {
  // id 받아와서, 해당 id에 맞는 article 불러와야 함 ..

  const DefaultArticle: ArticleContentProps = {
    title: "[경향신문] KT “한화, 하나도 안 무섭다”",
    image: process.env.PUBLIC_URL + `/image/image1.jpg`,
    content:
      "KT는 9일 수원 KT위즈파크에서 열린 한화전에서 13안타 4볼넷을 엮어 12-6으로 이겼다. 1-5로 뒤진 4회 3점, 5회 6점, 7회 2점을 뽑는 매서운 타격으로 뒤집었다. ",
  };

  return (
    <S.ArticleContainer>
      <SectionTitle text="뉴스" />
      <S.ArticleWrapper>
        <S.ArticleTitle>{DefaultArticle.title}</S.ArticleTitle>
        <S.ArticleImage src={DefaultArticle.image} />
        <S.ArticleContent> {DefaultArticle.content} </S.ArticleContent>
      </S.ArticleWrapper>
    </S.ArticleContainer>
  );
};

export default ArticleContent;
