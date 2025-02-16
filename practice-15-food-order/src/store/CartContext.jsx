import { createContext, useContext, useReducer, useState } from "react";

const CartContext = createContext({
  items: [],
  addToCart: (newItem) => {},
  removeFromCart: (itemId) => {},
  clearCart: () => {},
});

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART": {
      const items = state.items;
      const newItem = action.payload;
      const existingItem = items.find((item) => item.id === newItem.id);
      let updatedItems = [...items];

      if (existingItem) {
        updatedItems = updatedItems.map((item) =>
          item.id === newItem.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        updatedItems.push({ ...newItem, quantity: 1 });
      }

      return { ...state, items: updatedItems };
    }
    case "REMOVE_FROM_CART": {
      const itemId = action.payload;
      const updatedItems = state.items
        .map((item) =>
          item.id === itemId ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0);

      return { ...state, items: updatedItems };
    }
    case "CLEAR_CART": {
      return { ...state, items: [] };
    }
  }
};

export const CartContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, { items: [] });

  const addToCart = (newItem) =>
    dispatch({ type: "ADD_TO_CART", payload: newItem });

  const removeFromCart = (itemId) =>
    dispatch({ type: "REMOVE_FROM_CART", payload: itemId });

  const clearCart = () => dispatch({ type: "CLEAR_CART" });

  return (
    <CartContext.Provider
      value={{ items: state.items, addToCart, removeFromCart, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => useContext(CartContext);
