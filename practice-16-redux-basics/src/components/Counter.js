import { useSelector, useDispatch } from "react-redux";
import classes from "./Counter.module.css";
import { counterActions } from "../store/counter";

const Counter = () => {
  const dispatch = useDispatch();
  const counterValue = useSelector((state) => state.counter.value);
  const showCounter = useSelector((state) => state.counter.showCounter);

  const toggleCounterHandler = () => dispatch(counterActions.toggleCounter());
  const handleIncrement = () => dispatch(counterActions.increment());
  const handleIncreaseBy5 = () => dispatch(counterActions.increase(5));
  const handleDecrement = () => dispatch(counterActions.decrement());

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCounter && <div className={classes.value}>{counterValue}</div>}
      <div>
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleIncreaseBy5}>Increate by 5</button>
        <button onClick={handleDecrement}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
