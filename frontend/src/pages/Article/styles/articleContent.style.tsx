import { styled } from "styled-components";
import Article from "../Article";

const ArticleContainer = styled.div`
  grid-column: 1 / 2;
  grid-row: 1 / 3;

  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 40px minmax(0, 1fr);
`;

const ArticleWrapper = styled.div`
  grid-column: 1 / 2;
  grid-row: 2 / 3;

  display: grid;
  grid-template-rows: minmax(0, 40px) minmax(0, 2fr) minmax(0, 1fr);
  grid-template-columns: 1fr;
  background-color: white;
  border-radius: 12px;
  padding-top: 20px;
  padding-left: 20px;
  padding-right: 20px;

  // background-color: red;
`;

const ArticleTitle = styled.div`
  grid-column: 1 / 2;
  grid-row: 1 / 2;
  font-size: 25px;
  align-self: center;
  white-space: nowrap;
  overflow: hidden;
  margin-right: 24px;
`;

const ArticleImageWrapper = styled.div`
  position: relative;
  overflow: hidden;
  grid-column: 1 / 2;
  border-radius: 12px;
  margin: 10px;
`;

const ArticleImage = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
  grid-column: 1 / 2;
  grid-row: 2 / 3;

  border-radius: 12px;

  justify-self: center;
  align-self: center;

  object-fit: contain;
  overflow: hidden;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  min-width: 100%;
  min-height: 100%;
  max-width: 100%;
`;

const ArticleContent = styled.div`
  grid-column: 1/2;
  grid-row: 3/4;
  font-size: 18px;
  overflow: scroll;
  white-space: inherit;
  margin-top: 18px;
  margin-bottom: 36px;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export {
  ArticleContainer,
  ArticleWrapper,
  ArticleTitle,
  ArticleContent,
  ArticleImageWrapper,
  ArticleImage,
};
