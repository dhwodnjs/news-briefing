import { useEffect, useState } from "react";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

import HandleGenie from "./feature/HandleGenie";

import * as S from "../styles";

const AudioRecorder = () => {
  const [isListening, setIsListening] = useState(true);
  const { transcript, resetTranscript } = useSpeechRecognition();

  const startListening = () => {
    setIsListening(true);
    SpeechRecognition.startListening({
      continuous: true,
    });
  };

  const stopListening = () => {
    setIsListening(false);
    SpeechRecognition.stopListening();
  };

  useEffect(() => {
    console.log(transcript);
  }, [transcript]);

  const [isGenie, setIsGenie] = useState(false);

  useEffect(() => {
    startListening();
  });

  useEffect(() => {
    if (transcript.includes("기가") || transcript.includes("지니")) {
      setIsGenie(true);
      resetTranscript();
      startListening();

      const timeoutId = setTimeout(() => {
        resetTranscript();
        setIsGenie(false);
      }, 8000);
    }
  }, [transcript]);

  // useEffect(() => {
  //   if (isGenie) {
  //     handleGenie(transcript);
  //   }
  // }, [isGenie]);

  return isGenie ? (
    <S.recorderContainer>
      <S.recorderButton>{"👀"}</S.recorderButton>
      <S.recordText>{transcript}</S.recordText>
      <HandleGenie genie={transcript} />
    </S.recorderContainer>
  ) : (
    <div></div>
  );
};

export default AudioRecorder;
