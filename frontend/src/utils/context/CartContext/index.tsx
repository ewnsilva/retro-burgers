import React, { createContext, ReactNode, useMemo, useState } from 'react';

import { formatPrice, IProducts, useLanguage } from 'utils';

interface CartProductsProps extends IProducts {
  totalPrice?: number;
  quantity?: number;
}

export interface CartContextProps {
  cartItems: CartProductsProps[];
  isDrawerOpen: boolean;
  totalQuantity: number;
  addToCart: (item: CartProductsProps) => void;
  clearCart: () => void;
  decrementQuantity: (id: number) => void;
  incrementQuantity: (id: number) => void;
  isInCart: (id: number) => boolean;
  removeItem: (id: number) => void;
  setIsDrawerOpen: React.Dispatch<React.SetStateAction<boolean>>;
  updatePrice: (id: number, quantity: number) => void;
  updateValue: () => string;
}

export const CartContext = createContext<CartContextProps>({} as CartContextProps);

export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const { language } = useLanguage();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [cartItems, setCartItems] = useState<CartProductsProps[]>([]);

  const removeItem = (id: number): void => {
    setCartItems(prevState => prevState.filter(item => item.id !== id));
  };

  const updatePrice = (id: number, quantity: number): void => {
    setCartItems(prevState =>
      prevState.map(item =>
        item.id === id ? { ...item, quantity, totalPrice: quantity * item.pricePt } : item
      )
    );
  };

  const addToCart = (item: CartProductsProps) => {
    const existingItem = cartItems.find(cartItem => cartItem.id === item.id);
    if (!existingItem) {
      const newItem = { ...item, quantity: 1, totalPrice: item.pricePt };
      setCartItems(prevState => [...prevState, newItem]);
    } else {
      updatePrice(item.id, existingItem.quantity ? existingItem.quantity + 1 : 1);
    }
  };

  const totalQuantity = cartItems.reduce((sum, item) => sum + (item.quantity || 0), 0);

  const updateValue = () => {
    const total = cartItems.reduce(
      (previousValue, currentValue) => previousValue + (currentValue.totalPrice || 0),
      0
    );
    return formatPrice(total, language);
  };

  const isInCart = (id: number) => {
    return cartItems.some(item => item.id === id);
  };

  const incrementQuantity = (id: number): void => {
    const existingItem = cartItems.find(item => item.id === id);
    if (existingItem && existingItem.quantity !== undefined) {
      updatePrice(id, existingItem.quantity + 1);
    }
  };

  const decrementQuantity = (id: number): void => {
    const existingItem = cartItems.find(item => item.id === id);
    if (existingItem) {
      if (existingItem.quantity === 1) {
        removeItem(id);
      } else {
        updatePrice(id, existingItem.quantity ? existingItem.quantity - 1 : 0);
      }
    }
  };

  const clearCart = (): void => {
    setCartItems([]);
  };

  const contextValue = useMemo(
    () => ({
      cartItems,
      isDrawerOpen,
      totalQuantity,
      addToCart,
      clearCart,
      decrementQuantity,
      incrementQuantity,
      isInCart,
      removeItem,
      setIsDrawerOpen,
      updatePrice,
      updateValue,
    }),
    [
      cartItems,
      isDrawerOpen,
      totalQuantity,
      addToCart,
      clearCart,
      decrementQuantity,
      incrementQuantity,
      removeItem,
      setIsDrawerOpen,
      updatePrice,
      updateValue,
    ]
  );

  return <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>;
};
