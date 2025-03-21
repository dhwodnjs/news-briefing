// This is an async thunk that fetches the headline and returns parsed JSON
export const requestAudio = async (text: string): Promise<ArrayBuffer> => {
  // const response = await fetch("/api/audio", {
  const response = await fetch(
    `http://${process.env.REACT_APP_IP_ADDR}:8000/api/audio`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        text: text,
      }),
    },
  );

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const audioData = await response.arrayBuffer();

  return audioData;
};
