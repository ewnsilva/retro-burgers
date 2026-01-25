import { describe, it, expect, vi, beforeEach } from 'vitest';
import { renderHook, act } from '@testing-library/react';

import { useHomeLogic } from '../../../src/pages/Home/Home.logic';

import { useLanguage } from '../../../src/utils/hooks/useLanguage';
import { useProducts } from '../../../src/utils/hooks/products/useProducts';
import { useCart } from '../../../src/utils/hooks/products/useCart';

vi.mock('../../../src/utils/hooks/useLanguage', () => ({
  useLanguage: vi.fn(),
}));

vi.mock('../../../src/utils/hooks/products/useProducts', () => ({
  useProducts: vi.fn(),
}));

vi.mock('../../../src/utils/hooks/products/useCart', () => ({
  useCart: vi.fn(),
}));

const addToCartMock = vi.fn();

const productsMock = [
  {
    id: 1,
    title: { pt: 'Hambúrguer', en: 'Burger' },
  },
  {
    id: 2,
    title: { pt: 'Batata', en: 'Fries' },
  },
];

const categoriesMock = [
  { id: 1, title: 'Lanches' },
  { id: 2, title: 'Acompanhamentos' },
];

describe('useHomeLogic', () => {
  beforeEach(() => {
    vi.clearAllMocks();

    vi.mocked(useLanguage).mockReturnValue({
      language: 'pt',
    } as any);

    vi.mocked(useProducts).mockReturnValue({
      products: productsMock,
      categories: categoriesMock,
      isLoading: false,
    } as any);

    vi.mocked(useCart).mockReturnValue({
      totalQuantity: 3,
      addToCart: addToCartMock,
    } as any);
  });

  it('initializes with first category selected automatically', () => {
    const { result } = renderHook(() => useHomeLogic());

    expect(result.current.category).toBe(1);
  });

  it('filters products by search text in Portuguese', () => {
    const { result } = renderHook(() => useHomeLogic());

    act(() => {
      result.current.setSearch('hamb');
    });

    expect(result.current.filteredProducts).toHaveLength(1);
    expect(result.current.filteredProducts[0].title.pt).toBe('Hambúrguer');
  });

  it('returns hasNoResults when search has no matches', () => {
    const { result } = renderHook(() => useHomeLogic());

    act(() => {
      result.current.setSearch('pizza');
    });

    expect(result.current.hasNoResults).toBe(true);
  });

  it('controls customize modal state', () => {
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

  it('exposes cart total quantity', () => {
    const { result } = renderHook(() => useHomeLogic());

    expect(result.current.totalQuantity).toBe(3);
  });

  it('exposes addToCart function', () => {
    const { result } = renderHook(() => useHomeLogic());

    act(() => {
      result.current.addToCart({ id: 1 } as any);
    });

    expect(addToCartMock).toHaveBeenCalledWith({ id: 1 });
  });

  it('returns loading when products are loading', () => {
    vi.mocked(useProducts).mockReturnValueOnce({
      products: [],
      categories: [],
      isLoading: true,
    } as any);

    const { result } = renderHook(() => useHomeLogic());

    expect(result.current.showLoading).toBe(true);
  });
});
