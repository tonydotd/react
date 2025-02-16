import { currencyFormatter } from "../utils/format";

export default function CartItem({
  name,
  price,
  quantity,
  onIncrease,
  onDecrease,
}) {
  return (
    <li className="cart-item">
      <p>
        {name} - {currencyFormatter.format(price)} x {quantity}
      </p>
      <div className="cart-item-actions">
        <button onClick={onIncrease}>+</button>
        <span>{quantity}</span>
        <button onClick={onDecrease}>-</button>
      </div>
    </li>
  );
}
