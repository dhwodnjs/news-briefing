import { useEffect } from "react";
import * as S from "../styles";
import Header from "../Common/Header";
import TodayHeadline from "./components/TodayHeadline";
import ThemeRecommendation from "./components/ThemeRecommendation";
import Brief from "../Common/Brief";
import UserRecommendations from "../Common/UserRecommendations";
import { useDispatch, useSelector } from "react-redux";
import SideBar from "../Common/SideBar";
import AudioRecorder from "../Common/AudioRecorder";
import LiveBrief from "../Common/LiveBrief";
import checkLoaded from "../../utils/checkDataloaded";
import { setDataLoaded } from "../../redux/brief.slice";
import { updateAll } from "../Common/feature/handleBrief";

const Main = () => {
  const dispatch = useDispatch();
  const state = useSelector((state: any) => state);

  useEffect(() => {
    dispatch(setDataLoaded(false));
  }, []);

  useEffect(() => {
    if (checkLoaded()) {
      dispatch(setDataLoaded(true));
    }
  }, [state]);

  useEffect(() => {
    state.brief.dataloaded && updateAll(dispatch);
    state.brief.dataloaded;
  }, [state.brief.dataloaded]);

  return (
    <S.MainWindow id="main-window">
      <Header />
      <SideBar />
      <S.MainPage id="main-container">
        <TodayHeadline />
        <UserRecommendations />
        <ThemeRecommendation theme={"IT과학"} />
        <Brief />
      </S.MainPage>
      <AudioRecorder />
      <LiveBrief />
    </S.MainWindow>
  );
};

export default Main;
