export const playAudio = (
  audioData: ArrayBuffer,
  onEnded?: () => void,
): (() => void) => {
  const audioContext = new AudioContext();
  let source: AudioBufferSourceNode | null = null;

  const play = async () => {
    const buffer = await audioContext
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
  };

  console.log("Playing audio");
  play();
  console.log("Finished playing audio");

  return () => {
    source?.stop();
  };
};
