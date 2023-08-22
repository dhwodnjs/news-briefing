// This is an async thunk that fetches the headline and returns parsed JSON
export const requestThemeRecommendation = async (category_id: number) => {
  // const response = await fetch("/api/sample", {
  const response = await fetch(
    `http://172.30.1.85:8000/api/sample/${category_id}?num=2`,
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
