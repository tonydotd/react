import { Link, Outlet, useNavigate, useParams } from "react-router-dom";

import Header from "../Header.jsx";
import LoadingIndicator from "../UI/LoadingIndicator.jsx";
import ErrorBlock from "../UI/ErrorBlock.jsx";
import { useState } from "react";
import Modal from "../UI/Modal.jsx";
import { useDeleteEvent, useFetchEvent } from "../../api/events";

export default function EventDetails() {
  const navigate = useNavigate();
  const params = useParams();
  const [isDeleting, setDeleting] = useState(false);

  const { isLoading, data, error: fetchError } = useFetchEvent(params.id);

  const {
    mutate: deleteEvent,
    isPending: isPendingDeletion,
    error: deleteError,
  } = useDeleteEvent();

  function handleStartDelete() {
    setDeleting(true);
  }

  function handleStopDelete() {
    setDeleting(false);
  }

  function handleDelete() {
    deleteEvent({ id: params.id });
    navigate("/events");
  }

  let content;
  if (isLoading) {
    content = <LoadingIndicator />;
  }
  if (fetchError) {
    content = (
      <ErrorBlock
        title="Failed to fetch event details"
        message={
          fetchError.info?.message ||
          "Failed to fetch event details. Please try again later."
        }
      />
    );
  }
  if (data) {
    content = (
      <>
        <header>
          <h1>{data.title}</h1>
          <nav>
            <button onClick={handleStartDelete}>Delete</button>
            <Link to="edit">Edit</Link>
          </nav>
        </header>
        <div id="event-details-content">
          <img src={`http://localhost:3000/${data.image}`} alt={data.title} />
          <div id="event-details-info">
            <div>
              <p id="event-details-location">{data.location}</p>
              <time dateTime={`Todo-DateT$Todo-Time`}>
                {data.date} @ {data.time}
              </time>
            </div>
            <p id="event-details-description">{data.description}</p>
          </div>
          /
        </div>
      </>
    );
  }

  return (
    <>
      {isDeleting && (
        <Modal onClose={handleStopDelete}>
          <h2>Are your sure?</h2>
          <p>
            Do you really want to delete this event? This action cannot be
            undone.
          </p>
          <div className="form-actions">
            {isPendingDeletion && <p>Deleting, please wait...</p>}
            {!isPendingDeletion && (
              <>
                <button onClick={handleStopDelete} className="button-text">
                  Cancel
                </button>
                <button onClick={handleDelete} className="button">
                  Delete
                </button>
              </>
            )}
          </div>
          {deleteError && (
            <ErrorBlock
              title="Failed to delete event."
              message={
                deleteError.info?.message ||
                "Failed to delete event, please try again later."
              }
            />
          )}
        </Modal>
      )}
      <Outlet />
      <Header>
        <Link to="/events" className="nav-item">
          View all Events
        </Link>
      </Header>
      <article id="event-details">{content}</article>
    </>
  );
}
