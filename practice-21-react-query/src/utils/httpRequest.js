const API_URL = "http://localhost:3000";

export async function httpRequest({
  url,
  method = "GET",
  body,
  errorMessage,
  signal,
}) {
  const options = {
    method,
    headers: { "Content-Type": "application/json" },
    body: body ? JSON.stringify(body) : undefined,
    signal,
  };

  const response = await fetch(`${API_URL}${url}`, options);

  if (!response.ok) {
    const error = new Error(errorMessage || "An error occurred.");
    error.code = response.status;
    error.info = await response.json();
    throw error;
  }

  return response.json();
}
