// This is an async thunk that fetches the headline and returns parsed JSON
export const requestHeadline = async () => {
  // const response = await fetch("/api/sample", {
  console.log("REACT_APP_IP_ADDR: ", process.env.REACT_APP_IP_ADDR);
  const response = await fetch(
    `http://${process.env.REACT_APP_IP_ADDR}:8000/api/sample`,
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
