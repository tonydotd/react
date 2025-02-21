import { Link, useNavigate } from "react-router-dom";

import Modal from "../UI/Modal.jsx";
import EventForm from "./EventForm.jsx";
import { useCreateEvent } from "../../api/events/useCreateEvent.js";

export default function NewEvent() {
  const navigate = useNavigate();
  const { mutate } = useCreateEvent();

  function handleSubmit(formData) {
    mutate(formData);
    navigate("../");
  }

  return (
    <Modal onClose={() => navigate("../")}>
      <EventForm onSubmit={handleSubmit}>
        <Link to="../" className="button-text">
          Cancel
        </Link>
        <button type="submit" className="button">
          Create
        </button>
      </EventForm>
    </Modal>
  );
}
