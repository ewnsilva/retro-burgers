import React, { createContext, ReactNode, useMemo, useState } from 'react';

import { useLanguage } from 'utils/hooks/useLanguage';
import { formatPrice } from 'utils/constants/formatPrice';
import { ICartProducts } from 'utils/interfaces';

export interface CartContextProps {
  cartItems: ICartProducts[];
  isDrawerOpen: boolean;
  totalQuantity: number;
  addToCart: (item: ICartProducts) => void;
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
  const [cartItems, setCartItems] = useState<ICartProducts[]>([]);

  const removeItem = (id: number): void => {
    setCartItems(prevState => prevState.filter(item => item.id !== id));
  };

  const updatePrice = (id: number, quantity: number): void => {
    setCartItems(prevState =>
      prevState.map(item => {
        if (item.id !== id) return item;

        const basePrice = language === 'pt' ? item.price?.brl : item.price?.usd;
        const additionalsPrice =
          item.isCustom && item.additionals
            ? item.additionals.reduce((sum, add) => {
                const price = language === 'pt' ? Number(add.price?.brl) : Number(add.price?.usd);
                if (add.type === 'quantity') {
                  return sum + Number(price) * Number(add.quantity ?? 0);
                }
                return sum + price;
              }, 0)
            : 0;

        return {
          ...item,
          quantity,
          totalPrice: quantity * (Number(basePrice) + Number(additionalsPrice)),
        };
      })
    );
  };

  const addToCart = (item: ICartProducts) => {
    if (item.isCustom) {
      setCartItems(prev => [...prev, item]);
      return;
    }

    const existingItem = cartItems.find(cartItem => cartItem.id === item.id);
    const price = language === 'pt' ? Number(item.price?.brl) : Number(item.price?.usd);

    if (existingItem) {
      updatePrice(item.id, Number(existingItem.quantity ?? 0) + 1);
    } else {
      const newItem = {
        ...item,
        quantity: 1,
        totalPrice: price,
        isCustom: false,
      };
      setCartItems(prev => [...prev, newItem]);
    }
  };

  const totalQuantity = cartItems.reduce((sum, item) => sum + Number(item.quantity || 0), 0);

  const updateValue = () => {
    const total = cartItems.reduce(
      (previousValue, currentValue) => Number(previousValue) + Number(currentValue.totalPrice || 0),
      0
    );
    return formatPrice(total, language);
  };

  const isInCart = (id: number) => {
    return cartItems.some(item => item.id === id);
  };

  const incrementQuantity = (id: number): void => {
    const existingItem = cartItems.find(item => item.id === id);
    if (existingItem?.quantity !== undefined) {
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
