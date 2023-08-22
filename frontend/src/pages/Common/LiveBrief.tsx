import { useDispatch, useSelector } from "react-redux";
import * as S from "../styles";
import {
  selectBriefUserState,
  selectBriefThemeState,
} from "../../redux/selector";
import { setBriefTheme, setBriefUser } from "../../redux/brief.slice";

const LiveBrief = () => {
  const dispatch = useDispatch();
  const briefUserState = useSelector(selectBriefUserState);
  const briefThemeState = useSelector(selectBriefThemeState);

  const briefState = briefUserState || briefThemeState;

  const dStr = `재의의 요구가 있을 때에는 국회는 재의에 붙이고, 재적의원과반수의 출석과 출석의원 3분의 2 이상의 찬성으로 전과 같은 의결을 하면 그 법률안은 법률로서 확정된다.
정당의 목적이나 활동이 민주적 기본질서에 위배될 때에는 정부는 헌법재판소에 그 해산을 제소할 수 있고, 정당은 헌법재판소의 심판에 의하여 해산된다.`;

  const handleExitButton = () => {
    dispatch(setBriefUser(false));
    dispatch(setBriefTheme(false));
  };

  return briefState ? (
    <S.LiveBriefBox>
      <S.ExitButton onClick={handleExitButton}>X</S.ExitButton>
      <S.LiveBriefImageWrapper>
        <S.LiveBriefImage src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" />
      </S.LiveBriefImageWrapper>
      <S.LiveBriefContentContainer>
        <S.LiveBriefTitle>Live Brief</S.LiveBriefTitle>
        <S.LiveBriefContent>{dStr}</S.LiveBriefContent>
      </S.LiveBriefContentContainer>
    </S.LiveBriefBox>
  ) : (
    <></>
  );
};

export default LiveBrief;
