export const requestUserRecommendation = async () => {
  const response = await fetch(
    `http://${process.env.REACT_APP_IP_ADDR}:8000/api/sample?num=4`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    },
  );

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  return response.json();
};
