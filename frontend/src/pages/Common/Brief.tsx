/**
 * Brief.tsx is the brief page of the website.
 * When the user clicks brief component in the page
 * it starts AI brief process.
 * Locate at Main.tsx right bottom.
 * (For now, section is named as 많이 본 뉴스 in figma)
 */
import * as S from "../styles";
import SectionTitle from "./SectionTitle";
import { setBriefTheme, setBriefUser } from "../../redux/brief.slice";
import { useDispatch } from "react-redux";

const Brief = () => {
  /**
   * Brief consists of 2 clickable components.
   * 1. 맞춤 브리핑 (AI Brief without specific theme)
   * 2. 테마별 브리핑 (AI Brief with specific theme such as politics, economy, etc.)
   *
   * !TODO:
   * 1. Make 2 clickable components
   * 2. Define css grid using wrapper div at ./styles/brief.style.tsx
   */
  const dispatch = useDispatch();

  const handleBriefButton = (e: any) => {
    if (e.target.id === "brief-button-user") {
      dispatch(setBriefUser(null));
    } else if (e.target.id === "brief-button-theme") {
      dispatch(setBriefTheme(null));
    }
  };

  return (
    <S.BriefContainer id="brief-container">
      <SectionTitle text="뉴스 브리핑" />
      <S.BriefWrapper id="brief-wrapper">
        <S.BriefButton id="brief-button-user" onClick={handleBriefButton}>
          맞춤 브리핑
        </S.BriefButton>
        <S.BriefButton id="brief-button-theme" onClick={handleBriefButton}>
          테마 브리핑
        </S.BriefButton>
      </S.BriefWrapper>
    </S.BriefContainer>
  );
};

export default Brief;
