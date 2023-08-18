export const requestUserRecommendation = async () => {
  const response = await fetch(`/api/sample`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  console.log(response);

  return response.json();
};
