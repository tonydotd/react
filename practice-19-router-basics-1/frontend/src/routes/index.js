import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Events from "../pages/Events";
import EventDetail from "../pages/EventDetail";
import NewEvent from "../pages/NewEvent";
import EditEvent from "../pages/EditEvent";
import RootLayout from "../pages/RootLayout";
import EventLayout from "../pages/EventsRootLayout";
import { loader as eventsLoader } from "../loaders/eventsLoader";
import Error from "../pages/Error";
import { eventAction } from "../actions/eventActions";
import Newsletter from "../pages/Newsletter";
import { newsletterAction } from "../actions/newsletterActions";
import HydrateFallback from "../pages/HydrateFallback";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <Error />,
    hydrateFallbackElement: <HydrateFallback />,
    children: [
      { index: true, element: <Home /> },
      {
        path: "events",
        id: "events",
        element: <EventLayout />,
        children: [
          { index: true, element: <Events />, loader: eventsLoader },
          {
            path: ":id",
            children: [
              { index: true, element: <EventDetail />, loader: eventsLoader },
              { path: "edit", element: <EditEvent />, action: eventsLoader },
            ],
          },
          { path: "new", element: <NewEvent />, action: eventAction },
        ],
      },
      {
        path: "newsletter",
        element: <Newsletter />,
        action: newsletterAction,
      },
    ],
  },
]);
