import { IProducts } from "context";
import React, { createContext, ReactNode, useState } from "react";
import { formatPrice } from "utils";

interface CartProductsProps extends IProducts {
  totalPrice?: number;
  quantity?: number;
}

export interface CartContextProps {
  cartItems: CartProductsProps[];
  addToCart: (item: CartProductsProps) => void;
  removeItem: (id: number) => void;
  updatePrice: (id: number, quantity: number) => void;
  updateValue: () => string;
}

export const CartContext = createContext<CartContextProps>(
  {} as CartContextProps
);

export const CartProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [cartItems, setCartItems] = useState<CartProductsProps[]>([]);

  const addToCart = (item: CartProductsProps) => {
    const existingItem = cartItems.find((cartItem) => cartItem.id === item.id);
    if (!existingItem) {
      const newItem = { ...item, quantity: 1, totalPrice: item.price };
      setCartItems((prevState) => [...prevState, newItem]);
    } else {
      updatePrice(item.id, existingItem.quantity! + 1);
    }
  };

  const removeItem = (id: number) => {
    setCartItems((prevState) => prevState.filter((item) => item.id !== id));
  };

  const updatePrice = (id: number, quantity: number) => {
    setCartItems((prevState) =>
      prevState.map((item) =>
        item.id === id
          ? { ...item, quantity, totalPrice: quantity * item.price }
          : item
      )
    );
  };

  const updateValue = () => {
    const total = cartItems.reduce(
      (previousValue, currentValue) =>
        previousValue + (currentValue.totalPrice || 0),
      0
    );
    return formatPrice(total);
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeItem,
        updatePrice,
        updateValue,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
