export const requestUserRecommendation = async () => {
  const response = await fetch(`http://172.30.1.4:8000/api/sample?num=4`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  return response.json();
};
