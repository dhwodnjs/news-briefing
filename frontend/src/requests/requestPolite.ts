export const requestPolite = async (text: string) => {
  const response = await fetch(
    `http://${process.env.REACT_APP_IP_ADDR}:8000/api/polite`,
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

  return response.json();
};
