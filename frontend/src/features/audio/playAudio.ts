export const playAudio = (audioData: ArrayBuffer): (() => void) => {
  const audioContext = new AudioContext();
  let source: AudioBufferSourceNode | null = null;

  const play = async () => {
    const buffer = await audioContext.decodeAudioData(audioData);
    source = audioContext.createBufferSource();
    source.buffer = buffer;
    source.connect(audioContext.destination);
    source.start();
  };

  console.log("Playing audio");
  play();
  console.log("Finished playing audio");

  return () => {
    source?.stop();
  };
};
