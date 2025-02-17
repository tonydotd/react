import { cartActions } from "../slices/cartSlice";
import { notificationActions } from "../slices/notificationSlice";

const URL =
  "https://learn-react-c6352-default-rtdb.asia-southeast1.firebasedatabase.app/cart.json";

async function sendData(cart) {
  const response = await fetch(URL, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(cart),
  });

  if (!response.ok) {
    throw new Error("Sending cart data failed.");
  }
}

async function fetchData() {
  const response = await fetch(URL);
  if (!response.ok) {
    throw new Error("Could not fetch cart data!");
  }
  const data = await response.json();
  return data;
}

export function fetchCartData() {
  return async function (dispatch) {
    dispatch(
      notificationActions.setNotification({
        status: "fetching",
        name: "Fetching...",
        message: "Fetching cart data",
      })
    );

    try {
      const data = await fetchData();
      dispatch(
        notificationActions.setNotification({
          status: "success",
          name: "Success!",
          message: "Fetch cart data successfully!",
        })
      );
      dispatch(
        cartActions.replaceCart({
          items: data.items || [],
          totalQuantity: data.totalQuantity,
        })
      );
    } catch (err) {
      dispatch(
        notificationActions.setNotification({
          status: "error",
          name: "Error!",
          message: err.message || "Fetching cart data failed!",
        })
      );
    }
  };
}

export function sendCartData(cart) {
  return async function (dispatch) {
    dispatch(
      notificationActions.setNotification({
        status: "pending",
        name: "Sending...",
        message: "Sending cart data!",
      })
    );

    try {
      await sendData(cart);
      dispatch(
        notificationActions.setNotification({
          status: "success",
          name: "Success!",
          message: "Send cart data successfully!",
        })
      );
    } catch (err) {
      dispatch(
        notificationActions.setNotification({
          status: "error",
          name: "Error!",
          message: err.message || "Sending cart data failed!",
        })
      );
    }
  };
}
