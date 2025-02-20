import { Suspense } from "react";
import EventItem from "../components/EventItem";
import { Await, useLoaderData } from "react-router-dom";
import EventsList from "../components/EventsList";

function EventDetail() {
  const { eventsLoader, eventDetailsLoader } = useLoaderData();

  return (
    <>
      <Suspense fallback={<div>Loading event...</div>}>
        <Await resolve={eventDetailsLoader}>
          {(loadedEvent) => <EventItem event={loadedEvent} />}
        </Await>
      </Suspense>
      <Suspense fallback={<div>Loading all event...</div>}>
        <Await resolve={eventsLoader}>
          {(loadedEvents) => <EventsList events={loadedEvents} />}
        </Await>
      </Suspense>
    </>
  );
}

export default EventDetail;
