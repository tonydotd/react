import { useCartContext } from "../store/CartContext";
import { currencyFormatter } from "../utils/format";
import Button from "./UI/Button";

export default function MealItem({ meal }) {
  const { addToCart } = useCartContext();

  const handleAddToCart = () => addToCart(meal);

  return (
    <li className="meal-item">
      <article>
        <img src={`http://localhost:3000/${meal.image}`} alt={meal.name} />
        <div>
          <h3>{meal.name}</h3>
          <p className="meal-item-price">
            {currencyFormatter.format(meal.price)}
          </p>
          <p className="meal-item-description">{meal.description}</p>
        </div>
        <div className="meal-item-actions">
          <Button className="button" onClick={handleAddToCart}>
            Add to Cart
          </Button>
        </div>
      </article>
    </li>
  );
}
