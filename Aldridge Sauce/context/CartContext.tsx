"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

type CartContextType = {
  quantity: number;
  amount: number;
  setQuantity: (quantity: number) => void;
  setAmount: (amount: number) => void;
  increaseQuantity: () => void;
  decreaseQuantity: () => void;
  resetCart: () => void;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export const sellingPrice = 13.99;

export const CartProvider = ({ children }: { children: ReactNode }) => {
  // Get from localStorage (or default fallback)
  const getInitialQuantity = () => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("cartQuantity");
      return saved ? parseInt(saved) : 1;
    }
    return 1;
  };

  const getInitialAmount = () => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("cartAmount");
      return saved ? parseFloat(saved) : sellingPrice;
    }
    return sellingPrice;
  };

  const [quantity, setQuantity] = useState<number>(getInitialQuantity);
  const [amount, setAmount] = useState<number>(getInitialAmount);

  // Sync quantity and amount to localStorage on change
  useEffect(() => {
    localStorage.setItem("cartQuantity", quantity.toString());
  }, [quantity]);

  useEffect(() => {
    localStorage.setItem("cartAmount", amount.toString());
  }, [amount]);

  const increaseQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  const decreaseQuantity = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
  };

  // On shop open Reset quantity and amount
  const resetCart = () => {
    setQuantity(1);
    setAmount(sellingPrice);
    if (typeof window !== "undefined") {
      localStorage.setItem("cartQuantity", "1");
      localStorage.setItem("cartAmount", sellingPrice.toString());
    }
  };

  return (
    <CartContext.Provider
      value={{
        quantity,
        amount,
        setQuantity,
        setAmount,
        increaseQuantity,
        decreaseQuantity,
        resetCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
