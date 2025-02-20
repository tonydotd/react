import { Suspense } from "react";
import EventsList from "../components/EventsList";
import { Await, useLoaderData } from "react-router-dom";

export default function Events() {
  const { eventsLoader } = useLoaderData();

  return (
    <Suspense fallback={<div>Loading events...</div>}>
      <Await resolve={eventsLoader}>
        {(loadedEvents) => <EventsList events={loadedEvents} />}
      </Await>
    </Suspense>
  );
}
