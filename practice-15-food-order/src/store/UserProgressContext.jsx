import { createContext, useContext, useState } from "react";

const UserProgressContext = createContext({
  progress: "", // 'cart', 'checkout'
  showCart: () => {},
  hideCart: () => {},
  showCheckout: () => {},
  hideCheckout: () => {},
});

export function UserProgressContextProvider({ children }) {
  const [progress, setProgress] = useState("");

  function showCart() {
    setProgress("cart");
  }

  function hideCart() {
    setProgress("");
  }

  function showCheckout() {
    setProgress("checkout");
  }

  function hideCheckout() {
    setProgress("");
  }

  return (
    <UserProgressContext.Provider
      value={{ progress, showCart, hideCart, showCheckout, hideCheckout }}
    >
      {children}
    </UserProgressContext.Provider>
  );
}

export const useUserProgressContext = () => useContext(UserProgressContext);
