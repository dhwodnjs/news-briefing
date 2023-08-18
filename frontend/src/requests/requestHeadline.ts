// This is an async thunk that fetches the headline and returns parsed JSON
export const requestHeadline = async () => {
  // const response = await fetch("/api/sample", {
  const response = await fetch("http://172.30.1.4:8000/api/sample", {
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
