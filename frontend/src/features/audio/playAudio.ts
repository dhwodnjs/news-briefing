export const playAudio = (
  audioData: ArrayBuffer,
  onEnded?: () => void,
  audioCtx?: AudioContext,
): (() => void) => {
  let source: AudioBufferSourceNode | null = null;
  if (audioCtx) {
    const audioContext = new AudioContext();

    const play = async () => {
      audioCtx.resume();
      const buffer = await audioCtx
        .decodeAudioData(audioData)
        .then((buffer) => {
          source = audioCtx.createBufferSource();
          source.buffer = buffer;
          source.connect(audioCtx.destination);
          source.start();
          if (onEnded) {
            source.onended = () => {
              onEnded();
            };
          }
        })
        .catch((error) => {
          console.error("Error during decodeAudioData:", error);
        });
    };

    play();

    console.log("Playing audio");

    console.log("Finished playing audio");
  } else {
    const audioContext = new AudioContext();

    const play = async () => {
      audioContext.resume().then(() => {
        audioContext
          .decodeAudioData(audioData)
          .then((buffer) => {
            source = audioContext.createBufferSource();
            source.buffer = buffer;
            source.connect(audioContext.destination);
            source.start();
            if (onEnded) {
              source.onended = () => {
                onEnded();
              };
            }
          })
          .catch((error) => {
            console.error("Error during decodeAudioData:", error);
          });
      });
    };

    play();

    console.log("Playing audio");

    console.log("Finished playing audio");
  }
  return () => {
    source?.stop();
  };
};
