import React, { createContext, ReactNode, useState } from 'react';

import { formatPrice, IProducts } from 'utils';

interface CartProductsProps extends IProducts {
  totalPrice?: number;
  quantity?: number;
}

export interface CartContextProps {
  cartItems: CartProductsProps[];
  addToCart: (item: CartProductsProps) => void;
  removeItem: (id: number) => void;
  updatePrice: (id: number, quantity: number) => void;
  isDrawerOpen: boolean;
  setIsDrawerOpen: React.Dispatch<React.SetStateAction<boolean>>;
  totalQuantity: number;
  updateValue: () => string;
  isInCart: (id: number) => boolean;
  incrementQuantity: (id: number) => void;
  decrementQuantity: (id: number) => void;
}

export const CartContext = createContext<CartContextProps>({} as CartContextProps);

export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [cartItems, setCartItems] = useState<CartProductsProps[]>([]);

  const removeItem = (id: number): void => {
    setCartItems(prevState => prevState.filter(item => item.id !== id));
  };

  const updatePrice = (id: number, quantity: number): void => {
    setCartItems(prevState =>
      prevState.map(item =>
        item.id === id ? { ...item, quantity, totalPrice: quantity * item.price } : item
      )
    );
  };

  const addToCart = (item: CartProductsProps) => {
    const existingItem = cartItems.find(cartItem => cartItem.id === item.id);
    if (!existingItem) {
      const newItem = { ...item, quantity: 1, totalPrice: item.price };
      setCartItems(prevState => [...prevState, newItem]);
    } else {
      updatePrice(item.id, existingItem.quantity! + 1);
    }
  };

  const totalQuantity = cartItems.reduce((sum, item) => sum + (item.quantity || 0), 0);

  const updateValue = () => {
    const total = cartItems.reduce(
      (previousValue, currentValue) => previousValue + (currentValue.totalPrice || 0),
      0
    );
    return formatPrice(total);
  };

  const isInCart = (id: number) => {
    return cartItems.some(item => item.id === id);
  };

  const incrementQuantity = (id: number): void => {
    const existingItem = cartItems.find(item => item.id === id);
    if (existingItem) {
      updatePrice(id, existingItem.quantity! + 1);
    }
  };

  const decrementQuantity = (id: number): void => {
    const existingItem = cartItems.find(item => item.id === id);
    if (existingItem) {
      if (existingItem.quantity === 1) {
        removeItem(id);
      } else {
        updatePrice(id, existingItem.quantity! - 1);
      }
    }
  };

  return (
    <CartContext.Provider
      value={{
        addToCart,
        cartItems,
        decrementQuantity,
        incrementQuantity,
        isDrawerOpen,
        isInCart,
        removeItem,
        setIsDrawerOpen,
        totalQuantity,
        updatePrice,
        updateValue,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
