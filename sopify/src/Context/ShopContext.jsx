import React, { createContext, useState, useMemo } from "react";
import all_product from "../assets/all_product";


export const ShopContext = createContext(null);

// Initialize cart with 0 for all product IDs
const getDefaultCart = () => {
  let cart = {};
  for (let index = 0; index < all_product.length + 1; index++) {
    cart[index] = 0;
  }
  return cart;
};

const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());

  // Add item to cart
  const addTocart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };

  // Remove item from cart (ensuring quantity never drops below 0)
  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({
      ...prev,
      [itemId]: Math.max(prev[itemId] - 1, 0),
    }));
  };

  // Calculate total cart value in currency
  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = all_product.find((product) => product.id === Number(item));
        // Added a safety check to ensure itemInfo exists before accessing new_price
        if (itemInfo) {
          totalAmount += itemInfo.new_price * cartItems[item];
        }
      }
    }
    return totalAmount;
  };

  // Calculate total number of items in the cart (perfect for the Navbar badge)
  const getTotalCartItems = () => {
    let totalItems = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        totalItems += cartItems[item];
      }
    }
    return totalItems;
  };

  // Memoize the context value to prevent unnecessary re-renders in consumer components
  const contextValue = useMemo(() => ({
    getTotalCartItems,
    getTotalCartAmount,
    all_product,
    cartItems,
    addTocart,
    removeFromCart,
  }), [cartItems]);

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;