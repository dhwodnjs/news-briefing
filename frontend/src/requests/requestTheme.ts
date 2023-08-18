export const requestTheme = async (category_id: number) => {
  const response = await fetch(`api/sample/${category_id}`, {
    // const response = await fetch(`/api/sample`, {
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
