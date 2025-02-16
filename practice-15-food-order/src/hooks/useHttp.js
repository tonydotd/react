import { useCallback, useEffect, useState } from "react";

async function sendHttpRequest(url, method, body, headers) {
  const requestHeaders = headers
    ? { "Content-Type": "application/json", ...headers }
    : { "Content-Type": "application/json" };
  const options = {
    method,
    headers: requestHeaders,
    body: body && method !== "GET" ? JSON.stringify(body) : null,
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();
    if (!response.ok) {
      throw new Error(result.message || "Request failed");
    }
    return result;
  } catch (error) {
    throw new Error(error.message || "Network error");
  }
}

export default function useHttp(
  initialUrl,
  initialMethod = "GET",
  initialHeaders = {}
) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [url, setUrl] = useState(initialUrl);
  const [method, setMethod] = useState(initialMethod);
  const [headers, setHeaders] = useState(initialHeaders);

  function clearData() {
    setData(null);
  }

  const sendRequest = useCallback(
    async (
      body,
      customUrl = url,
      customMethod = method,
      customHeaders = headers
    ) => {
      setLoading(true);
      setError(null);
      try {
        const data = await sendHttpRequest(
          customUrl,
          customMethod,
          body,
          customHeaders
        );
        setData(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    },
    [url, method, headers]
  );

  useEffect(() => {
    if (url && method === "GET") {
      sendRequest();
    }
  }, [url, method]);

  return {
    data,
    loading,
    error,
    setUrl,
    setMethod,
    setHeaders,
    sendRequest,
    clearData,
  };
}
