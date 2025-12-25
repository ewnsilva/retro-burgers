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
  const [successOpen, setSuccessOpen] = useState(false);

  const closeDrawer = () => {
    setIsDrawerOpen(false);
  };

  const openSummary = () => {
    setSummaryOpen(true);
  };

  const confirmOrder = () => {
    setSummaryOpen(false);
    setSuccessOpen(true);
    clearCart();
  };

  useEffect(() => {
    if (cartItems.length === 0 && !successOpen) {
      setIsDrawerOpen(false);
    }
  }, [cartItems, successOpen, setIsDrawerOpen]);

  return {
    cartItems,
    isDrawerOpen,
    totalQuantity,
    summaryOpen,
    successOpen,
    closeDrawer,
    openSummary,
    confirmOrder,
    setSummaryOpen,
    setSuccessOpen,
    clearCart,
    decrementQuantity,
    incrementQuantity,
    removeItem,
    updateValue,
  };
};
