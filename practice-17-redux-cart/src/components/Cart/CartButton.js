import classes from "./CartButton.module.css";
import { uiActions } from "../../store/slices/uiSlice";
import { useDispatch, useSelector } from "react-redux";

const CartButton = (props) => {
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const dispatch = useDispatch();

  function handleClick() {
    dispatch(uiActions.toggleShowCart());
  }

  return (
    <button className={classes.button} onClick={handleClick}>
      <span>My Cart</span>
      <span className={classes.badge}>{totalQuantity}</span>
    </button>
  );
};

export default CartButton;
