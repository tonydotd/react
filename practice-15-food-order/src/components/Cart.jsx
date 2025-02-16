import { useCartContext } from "../store/CartContext";
import { useMemo } from "react";
import Modal from "./UI/Modal";
import CartItem from "./CartItem";
import Button from "./UI/Button";
import { currencyFormatter } from "../utils/format";
import { useUserProgressContext } from "../store/UserProgressContext";

export default function Cart() {
  const cart = useCartContext();
  const userProgress = useUserProgressContext();

  const totalPrice = useMemo(
    () => cart.items.reduce((sum, item) => sum + item.quantity * item.price, 0),
    [cart.items]
  );

  function handleIncreaseCartItem(item) {
    cart.addToCart(item);
  }

  function handleDecreaseCartItem(itemId) {
    cart.removeFromCart(itemId);
  }

  function handleClose() {
    userProgress.hideCart();
  }

  function handleCheckout() {
    userProgress.showCheckout();
  }

  return (
    <Modal
      className="cart"
      isOpen={userProgress.progress === "cart"}
      onClose={handleClose}
    >
      <h2>Your Cart</h2>
      <ul>
        {cart.items.map((item) => (
          <CartItem
            key={item.id}
            {...item}
            onIncrease={() => handleIncreaseCartItem(item)}
            onDecrease={() => handleDecreaseCartItem(item.id)}
          />
        ))}
      </ul>
      <p className="cart-total">{currencyFormatter.format(totalPrice)}</p>
      <div className="modal-actions">
        <Button textOnly onClick={handleClose}>
          Close
        </Button>
        {cart.items.length > 0 && (
          <Button onClick={handleCheckout}>Go to Checkout</Button>
        )}
      </div>
    </Modal>
  );
}
