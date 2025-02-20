import { redirect } from "react-router-dom";

export async function eventAction({ request, params }) {
  console.log("eventAction");
  const method = request.method;
  let url = "http://localhost:8080/events/";
  let body = null;
  if (method !== "GET" && method !== "POST") {
    url += params.id;
  }
  if (method !== "GET" && method !== "DELETE") {
    const formData = await request.formData();
    const data = Object.fromEntries(formData);
    body = JSON.stringify(data);
  }
  const headers = { "Content-Type": "application/json" };
  const response = await fetch(url, { method, headers, body });

  if (!response.ok) {
    return response;
  }

  return redirect("/events");
}
