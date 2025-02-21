import { httpRequest } from "./httpRequest";

export async function fetchEvents({ signal, params }) {
  const searchParams = new URLSearchParams();
  if (params.seach) searchParams.append("search", params.search);
  if (params.max) searchParams.append("max", params.max);

  const res = await httpRequest({
    url: `/events?${searchParams}`,
    method: "GET",
    signal,
  });
  return res.events;
}

export async function fetchEvent({ signal, id }) {
  const res = await httpRequest({
    url: `/events/${id}`,
    method: "GET",
    signal,
  });
  return res.event;
}

export async function fetchSelectableImages({ signal }) {
  const res = await httpRequest({
    url: `/events/images`,
    method: "GET",
    signal,
  });
  return res.images;
}

export async function createEvent(event) {
  return httpRequest({ url: `/events`, method: "POST", body: { event } });
}

export async function updateEvent({ id, event }) {
  return httpRequest({ url: `/events/${id}`, method: "PUT", body: { event } });
}

export async function deleteEvent({ id }) {
  return httpRequest({ url: `/events/${id}`, method: "DELETE" });
}
