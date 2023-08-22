import { useDispatch, useSelector } from "react-redux";
import * as S from "../styles";
import {
  selectBriefUserState,
  selectBriefThemeState,
} from "../../redux/selector";
import { setBriefTheme, setBriefUser } from "../../redux/brief.slice";
import { useEffect, useState } from "react";
import { checkLoadedSummary } from "../../utils/checkDataloaded";
import { requestAudio } from "../../requests/requestAudio";
import { playAudio } from "../../features/audio/playAudio";

const LiveBrief = () => {
  const state = useSelector((state: any) => state);
  const dispatch = useDispatch();

  const briefUserState = useSelector(selectBriefUserState);
  const briefThemeState = useSelector(selectBriefThemeState);
  const briefState = briefUserState || briefThemeState;

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState("");

  const [idx, setIdx] = useState(0);

  const [audio, setAudio] = useState<ArrayBuffer | null>(null);

  useEffect(() => {
    if (briefState && checkLoadedSummary()) {
      const briefSummary = state.brief.briefSummaried;
      const briefTitle = state.brief.briefTitles;
      const LiveBriefImage = state.brief.imageList;

      setTitle(briefTitle[0]);
      setContent(briefSummary[0].result);
      setImage(LiveBriefImage[0]);
    }
  }, [state]);

  useEffect(() => {
    if (idx !== 0 && idx < state.brief.briefSummaried.length) {
      setTitle(state.brief.briefTitles[idx]);
      setContent(state.brief.briefSummaried[idx].result);
      setImage(state.brief.imageList[idx]);
    }
  }, [idx]);

  useEffect(() => {
    const fetchAudio = async () => {
      const data = await requestAudio(content); // 일단 호출 안하도록
      setAudio(data);
    };
    fetchAudio();
  }, [content]);

  useEffect(() => {
    if (audio && briefState) {
      const cleanup = playAudio(audio, () => {
        setIdx((prevIdx) => prevIdx + 1); // Increment idx when audio ends
      }); // 일단 호출 안하도록
      return cleanup;
    }
  }, [audio]);

  const handleExitButton = () => {
    dispatch(setBriefUser(false));
    dispatch(setBriefTheme(false));
  };

  return briefState ? (
    <S.LiveBriefBox>
      <S.ExitButton onClick={handleExitButton}>X</S.ExitButton>
      <S.LiveBriefImageWrapper>
        <S.LiveBriefImage src={image} />
      </S.LiveBriefImageWrapper>
      <S.LiveBriefContentContainer>
        <S.LiveBriefTitle>{title}</S.LiveBriefTitle>
        <S.LiveBriefContent>{content}</S.LiveBriefContent>
      </S.LiveBriefContentContainer>
    </S.LiveBriefBox>
  ) : (
    <></>
  );
};

export default LiveBrief;
