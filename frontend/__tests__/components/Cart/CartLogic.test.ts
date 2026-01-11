import { renderHook, act } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';

import { useCartLogic } from '../../../src/components/Cart/Cart.logic';
import { useCart } from '../../../src/utils/hooks/products/useCart';

vi.mock('../../../src/utils/hooks/products/useCart', () => ({
  useCart: vi.fn(),
}));

describe('useCartLogic', () => {
  const setIsDrawerOpen = vi.fn();
  const clearCart = vi.fn();

  beforeEach(() => {
    vi.clearAllMocks();

    vi.mocked(useCart).mockReturnValue({
      cartItems: [{ id: 1, quantity: 2 }],
      isDrawerOpen: true,
      totalQuantity: 2,
      clearCart,
      decrementQuantity: vi.fn(),
      incrementQuantity: vi.fn(),
      removeItem: vi.fn(),
      setIsDrawerOpen,
      updateValue: vi.fn(),
    });
  });

  it('starts with summaryOpen set to false', () => {
    const { result } = renderHook(() => useCartLogic());

    expect(result.current.summaryOpen).toBe(false);
  });

  it('closes the drawer when calling closeDrawer', () => {
    const { result } = renderHook(() => useCartLogic());

    act(() => {
      result.current.closeDrawer();
    });

    expect(setIsDrawerOpen).toHaveBeenCalledWith(false);
  });

  it('confirms the order correctly', () => {
    const { result } = renderHook(() => useCartLogic());

    act(() => {
      result.current.openSummary();
    });

    expect(result.current.summaryOpen).toBe(true);

    act(() => {
      result.current.confirmOrder();
    });

    expect(result.current.summaryOpen).toBe(false);
    expect(clearCart).toHaveBeenCalledTimes(1);
  });

  it('closes the drawer automatically when the cart is empty', () => {
    vi.mocked(useCart).mockReturnValueOnce({
      cartItems: [],
      isDrawerOpen: true,
      totalQuantity: 0,
      clearCart,
      decrementQuantity: vi.fn(),
      incrementQuantity: vi.fn(),
      removeItem: vi.fn(),
      setIsDrawerOpen,
      updateValue: vi.fn(),
    });

    renderHook(() => useCartLogic());

    expect(setIsDrawerOpen).toHaveBeenCalledWith(false);
  });
});
