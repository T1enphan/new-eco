import React, { createContext, useState } from "react";

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cartLength, setCartLength] = useState(0);
  const [wishlistCount, setWishlistCount] = useState(0);

  return (
    <CartContext.Provider
      value={{ cartLength, setCartLength, wishlistCount, setWishlistCount }}
    >
      {children}
    </CartContext.Provider>
  );
};

export { CartContext, CartProvider };
