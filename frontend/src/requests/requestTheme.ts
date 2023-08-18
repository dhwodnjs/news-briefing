export const requestTheme = async (category_id: number) => {
  const response = await fetch(
    `http://172.30.1.4:8000/api/sample/${category_id}?num=5`,
    {
      // const response = await fetch(`/api/sample`, {
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
