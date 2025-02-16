import { useMemo } from "react";
import logoImg from "../assets/logo.jpg";
import { useCartContext } from "../store/CartContext";
import { useUserProgressContext } from "../store/UserProgressContext";
import Button from "./UI/Button";

export default function Header() {
  const cart = useCartContext();
  const userProgress = useUserProgressContext();

  const totalCartItems = useMemo(
    () =>
      cart.items.reduce(
        (totalItemCount, item) => totalItemCount + item.quantity,
        0
      ),
    [cart.items]
  );

  function handleShowCart() {
    userProgress.showCart();
  }

  return (
    <header id="main-header">
      <div id="title">
        <img src={logoImg} alt="A restaurant" />
        <h1>ReactFood</h1>
      </div>
      <nav>
        <Button textOnly onClick={handleShowCart}>
          Cart ({totalCartItems})
        </Button>
      </nav>
    </header>
  );
}
