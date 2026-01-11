import { useEffect, useState } from 'react';
import { useCart } from 'utils/hooks/products/useCart';

export const useCartLogic = () => {
  const {
    cartItems,
    isDrawerOpen,
    totalQuantity,
    clearCart,
    decrementQuantity,
    incrementQuantity,
    removeItem,
    setIsDrawerOpen,
    updateValue,
  } = useCart();

  const [summaryOpen, setSummaryOpen] = useState(false);

  const closeDrawer = () => {
    setIsDrawerOpen(false);
  };

  const openSummary = () => {
    setSummaryOpen(true);
  };

  const confirmOrder = () => {
    setSummaryOpen(false);
    clearCart();
  };

  useEffect(() => {
    if (cartItems.length === 0) {
      setIsDrawerOpen(false);
    }
  }, [cartItems]);

  return {
    cartItems,
    isDrawerOpen,
    totalQuantity,
    summaryOpen,
    closeDrawer,
    openSummary,
    confirmOrder,
    setSummaryOpen,
    clearCart,
    decrementQuantity,
    incrementQuantity,
    removeItem,
    updateValue,
  };
};
