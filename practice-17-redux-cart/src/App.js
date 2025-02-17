import { useSelector } from "react-redux";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { useEffect } from "react";
import Notification from "./components/Notification/Notification";
import { useDispatch } from "react-redux";
import { fetchCartData, sendCartData } from "./store/actions/cartActions";
import { uiActions } from "./store/slices/uiSlice";

function App() {
  const dispatch = useDispatch();
  const { showCart, firstLoad } = useSelector((state) => state.ui);
  const notification = useSelector((state) => state.notification);
  const { items, changed } = useSelector((state) => state.cart);
  const cart = useSelector((state) => state.cart);

  console.log(firstLoad);

  useEffect(() => {
    if (firstLoad) {
      dispatch(fetchCartData());
      dispatch(uiActions.setFirstLoad(false));
    }
  }, [firstLoad, dispatch]);

  useEffect(() => {
    console.log("firstLoad", firstLoad);
    console.log("changed", changed);
    if (!firstLoad && changed) {
      dispatch(sendCartData(cart));
    }
  }, [cart, firstLoad, changed, items, dispatch]);

  return (
    <>
      <Notification {...notification} />
      <Layout>
        {showCart && <Cart />}
        <Products />
      </Layout>
    </>
  );
}

export default App;
