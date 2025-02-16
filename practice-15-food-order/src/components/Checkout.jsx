import { useMemo } from "react";
import { useUserProgressContext } from "../store/UserProgressContext";
import { currencyFormatter } from "../utils/format";
import Input from "./UI/Input";
import Modal from "./UI/Modal";
import Button from "./UI/Button";
import { useCartContext } from "../store/CartContext";
import useHttp from "../hooks/useHttp";
import Error from "./Error";
import { useActionState } from "react";
import OrderSuccess from "./OrderSuccess";

export default function Checkout({}) {
  const userProgress = useUserProgressContext();
  const cart = useCartContext();
  const { data, error, sendRequest, clearData } = useHttp(
    "http://localhost:3000/orders",
    "POST"
  );

  const [checkoutState, checkoutAction, checkoutPending] =
    useActionState(handleSubmit);

  async function handleSubmit(prevState, formData) {
    const customerData = Object.fromEntries(formData.entries());

    await sendRequest({
      order: {
        items: cart.items,
        customer: customerData,
      },
    });
  }

  const totalPrice = useMemo(
    () => cart.items.reduce((sum, item) => sum + item.quantity * item.price, 0),
    [cart.items]
  );

  function handleClose() {
    userProgress.hideCheckout();
  }

  function handleFinish() {
    userProgress.hideCheckout();
    cart.clearCart();
    clearData();
  }

  if (data && !error) {
    return <OrderSuccess onFinish={handleFinish} />;
  }

  let actions = (
    <>
      <Button type="button" textOnly onClick={handleClose}>
        Close
      </Button>
      <Button>Submit Order</Button>
    </>
  );
  if (checkoutPending) {
    actions = <span>Sending order data..</span>;
  }

  return (
    <Modal isOpen={userProgress.progress === "checkout"} onCancel={handleClose}>
      <form action={checkoutAction}>
        <h2>Checkout</h2>
        <p>Total Amount: {currencyFormatter.format(totalPrice)}</p>
        <Input type="text" label="Full Name" id="name" required />
        <Input type="text" label="Email" id="email" required />
        <Input type="text" label="Street" id="street" required />
        <div className="control-row">
          <Input type="text" label="Postal Code" id="postal-code" required />
          <Input type="text" label="City" id="city" required />
        </div>

        {error && <Error title="Failed to submit order" message={error} />}

        <div className="modal-actions">{actions}</div>
      </form>
    </Modal>
  );
}
