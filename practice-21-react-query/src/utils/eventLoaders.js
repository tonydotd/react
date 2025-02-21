import { httpRequest } from "./httpRequest";

export function eventDetailsLoader({ params }) {
  return httpRequest({ url: `/events/${params.id}`, method: "GET" });
}
