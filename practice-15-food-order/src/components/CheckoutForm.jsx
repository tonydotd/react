import { currencyFormatter } from "../utils/format";
import Input from "./UI/Input";
import Button from "./UI/Button";

async function checkoutAction(prevState, formData) {
  const fullName = formData.get("full-name").trim();
  const email = formData.get("email").trim();
  const street = formData.get("street").trim();
  const postalCode = formData.get("postal-code").trim();
  const city = formData.get("city").trim();

  const errors = [];

  if (fullName.length < 6) {
    errors.push("Full name must be at least 6 characters");
  }

  if (errors.length > 0) {
    console.log("prevState", prevState);
    return { fullName, email, street, postalCode, city, errors };
  }

  await postOrder({ items: {}, customer: {} });
  return { errors: [] };
}

export default function CheckoutForm() {
  return (
    <form action={formAction}>
      <h2>Checkout</h2>
      <p>Total Amount: {currencyFormatter.format(totalPrice)}</p>
      <Input
        type="text"
        label="Full Name"
        id="full-name"
        defaultValue={state.fullName}
        required
      />
      <Input
        type="text"
        label="Email"
        id="email"
        defaultValue={state.email}
        required
      />
      <Input
        type="text"
        label="Street"
        id="street"
        defaultValue={state.street}
        required
      />
      <div className="control-row">
        <Input
          type="text"
          label="Postal Code"
          id="postal-code"
          defaultValue={state.postalCode}
          required
        />
        <Input
          type="text"
          label="City"
          id="city"
          defaultValue={state.city}
          required
        />
      </div>

      <ul className="errors">
        {state.errors.map((error) => (
          <li key={error}>{error}</li>
        ))}
      </ul>
      {state.message}

      <div className="modal-actions">
        <Button type="button" textOnly onClick={handleClose}>
          Close
        </Button>
        <Button disabled={pending}>Submit Order</Button>
      </div>
    </form>
  );
}
