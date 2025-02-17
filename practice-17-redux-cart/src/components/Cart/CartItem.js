import classes from "./CartItem.module.css";
import { cartActions } from "../../store/slices/cartSlice";
import { useDispatch } from "react-redux";

const CartItem = ({ item }) => {
  const { id, name, quantity, totalPrice, price } = item;
  const dispatch = useDispatch();

  const handleAddToCart = () => dispatch(cartActions.addToCart(item));
  const handleRemoveFromCart = () => dispatch(cartActions.removeFromCart(id));

  return (
    <li className={classes.item}>
      <header>
        <h3>{name}</h3>
        <div className={classes.price}>
          ${totalPrice.toFixed(2)}{" "}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={handleRemoveFromCart}>-</button>
          <button onClick={handleAddToCart}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
