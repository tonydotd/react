import { CartContextProvider, useCartContext } from "./store/CartContext";
import Header from "./components/Header";
import Meals from "./components/Meals";
import Cart from "./components/Cart";
import { UserProgressContextProvider } from "./store/UserProgressContext";
import Checkout from "./components/Checkout";

function App() {
  return (
    <UserProgressContextProvider>
      <CartContextProvider>
        <Cart />
        <Checkout />
        <Header />
        <Meals />
      </CartContextProvider>
    </UserProgressContextProvider>
  );
}

export default App;
