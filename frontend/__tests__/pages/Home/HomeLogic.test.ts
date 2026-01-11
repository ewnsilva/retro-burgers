import { describe, it, expect, vi, beforeEach } from 'vitest';
import { renderHook, act } from '@testing-library/react';

import { useHomeLogic } from '../../../src/pages/Home/Home.logic';

const fetchProductsMock = vi.fn();
const fetchAdditionalsMock = vi.fn();
const addToCartMock = vi.fn();

vi.mock('../../../src/utils/hooks/useLanguage', () => ({
  useLanguage: () => ({
    language: 'pt',
  }),
}));

vi.mock('../../../src/utils/hooks/products/useProducts', () => ({
  useProducts: () => ({
    products: [
      { id: 1, namePt: 'Hambúrguer', nameEn: 'Burger' },
      { id: 2, namePt: 'Batata', nameEn: 'Fries' },
    ],
    additionals: [],
    fetchProducts: fetchProductsMock,
    fetchAdditionals: fetchAdditionalsMock,
  }),
}));

vi.mock('../../../src/utils/hooks/products/useCart', () => ({
  useCart: () => ({
    totalQuantity: 0,
    addToCart: addToCartMock,
  }),
}));

describe('useHomeLogic', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('initializes with default state and calls fetchProducts and fetchAdditionals', () => {
    renderHook(() => useHomeLogic());

    expect(fetchProductsMock).toHaveBeenCalledWith(1);
    expect(fetchAdditionalsMock).toHaveBeenCalled();
  });

  it('filters products by search text in Portuguese', () => {
    const { result } = renderHook(() => useHomeLogic());

    act(() => {
      result.current.setSearch('hamb');
    });

    expect(result.current.filteredProducts).toHaveLength(1);
    expect(result.current.filteredProducts[0].namePt).toBe('Hambúrguer');
  });

  it('updates category and refetches products', () => {
    const { result } = renderHook(() => useHomeLogic());

    act(() => {
      result.current.setCategory(2);
    });

    expect(fetchProductsMock).toHaveBeenCalledWith(2);
  });

  it('toggles customize modal state', () => {
    const { result } = renderHook(() => useHomeLogic());

    act(() => {
      result.current.setCustomizeOpen(true);
    });

    expect(result.current.customizeOpen).toBe(true);
  });

  it('controls order success modal state', () => {
    const { result } = renderHook(() => useHomeLogic());

    act(() => {
      result.current.setOrderSuccessOpen(true);
    });

    expect(result.current.orderSuccessOpen).toBe(true);
  });

  it('shows MenuHint after welcome finishes', () => {
    const { result } = renderHook(() => useHomeLogic());

    act(() => {
      result.current.setShowHint(true);
    });

    expect(result.current.showHint).toBe(true);
  });

  it('exposes addToCart function', () => {
    const { result } = renderHook(() => useHomeLogic());

    act(() => {
      result.current.addToCart({ id: 1 } as any);
    });

    expect(addToCartMock).toHaveBeenCalled();
  });
});
