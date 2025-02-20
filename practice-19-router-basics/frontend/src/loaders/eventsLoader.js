export async function loader({ params }) {
  return {
    eventsLoader: eventsLoader(),
    eventDetailsLoader: params.id ? await eventDetailsLoader(params.id) : {},
  };
}

async function eventsLoader() {
  const res = await fetch("http://localhost:8080/events");
  if (!res.ok) {
    throw new Response(JSON.stringify({ message: "Could not fetch events." }), {
      status: 500,
    });
  }
  const data = await res.json();
  return data.events;
}

async function eventDetailsLoader(id) {
  const res = await fetch(`http://localhost:8080/events/${id}`);
  if (!res.ok) {
    throw new Response(
      JSON.stringify({
        message: "Could not fetch details for selected event",
      }),
      { status: 500 }
    );
  }
  const data = await res.json();
  return data.event;
}
