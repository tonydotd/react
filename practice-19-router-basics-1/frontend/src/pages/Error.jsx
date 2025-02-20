import React from "react";
import { useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();

  let message;
  switch (error?.status) {
    case 404:
      message = "Oops! The page you are looking for does not exist.";
      break;
    case 500:
      message = "Sorry! Something went wrong on the server.";
      break;
    case 403:
      message = "You do not have permission to view this page.";
      break;
    case 400:
      message = "Bad request. Please check the URL or your input.";
      break;
    default:
      message = "An unexpected error occurred. Please try again later.";
  }

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h1>Error {error?.status || "Unknown"}</h1>
      <p>{message}</p>
      <p>Please try again later or go back to the home page.</p>
      <a href="/">Go Home</a>
    </div>
  );
};

export default Error;
