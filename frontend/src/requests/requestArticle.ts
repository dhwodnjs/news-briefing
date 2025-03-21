export const requestArticle = async (article_id: number) => {
  // const response = await fetch("/api/sample", {
  const response = await fetch(
    `http://${process.env.REACT_APP_IP_ADDR}:8000/article/api/${article_id}`,
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
