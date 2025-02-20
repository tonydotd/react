import { useRouteLoaderData } from "react-router-dom";
import EventForm from "../components/EventForm";

function EditEvent() {
  const { event } = useRouteLoaderData("event-details");

  return <EventForm method="patch" event={event} {...event} />;
}

export default EditEvent;
