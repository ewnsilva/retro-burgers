import { describe, it, expect, vi, beforeEach } from 'vitest';
import { renderHook, waitFor } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactNode } from 'react';

import { useProducts } from '../../../../src/utils/hooks/products/useProducts';
import { ICategory, IProducts } from '../../../../src/utils/interfaces';

const getMock = vi.fn();
const navigateMock = vi.fn();

vi.mock('../../../../src/utils/hooks/useAxios', () => ({
  useAxios: () => ({
    api: {
      get: getMock,
    },
  }),
}));

vi.mock('react-router-dom', async () => {
  const actual = await vi.importActual<typeof import('react-router-dom')>('react-router-dom');

  return {
    ...actual,
    useNavigate: () => navigateMock,
  };
});

const createWrapper = () => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
      },
    },
  });

  return ({ children }: { children: ReactNode }) => (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

describe('useProducts', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    process.env.REACT_APP_API_URL = 'http://api.test';
  });

  it('should fetch categories and products successfully', async () => {
    const mockCategories: ICategory[] = [{ id: 1, title: { pt: 'Burgers', en: 'Burgers' } }];

    const mockProducts: IProducts[] = [
      {
        id: 1,
        title: { pt: 'Burger 1', en: 'Burger 1' },
        price: { brl: '25', usd: '5' },
        logo: 'burger1.jpg',
        additionals: [],
        category_id: 0,
        description: { pt: 'Hamburguer delicioso.', en: 'Delicious burger.' },
      },
    ];

    getMock
      .mockResolvedValueOnce({ data: mockCategories })
      .mockResolvedValueOnce({ data: mockProducts });

    const { result } = renderHook(() => useProducts(1), { wrapper: createWrapper() });

    await waitFor(() => {
      expect(result.current.isLoading).toBe(false);
    });

    expect(result.current.categories).toEqual(mockCategories);
    expect(result.current.products).toEqual(mockProducts);
  });

  it('should navigate to /error when categories request fails', async () => {
    getMock.mockRejectedValueOnce(new Error('API error'));

    renderHook(() => useProducts(1), { wrapper: createWrapper() });

    await waitFor(() => {
      expect(navigateMock).toHaveBeenCalledWith('/error');
    });
  });

  it('should not fetch products when category is undefined', async () => {
    const mockCategories: ICategory[] = [{ id: 1, title: { pt: 'Burgers', en: 'Burgers' } }];

    getMock.mockResolvedValueOnce({ data: mockCategories });

    const { result } = renderHook(() => useProducts(undefined), {
      wrapper: createWrapper(),
    });

    await waitFor(() => {
      expect(result.current.isLoading).toBe(false);
    });

    expect(result.current.categories).toEqual(mockCategories);
    expect(result.current.products).toEqual([]);

    expect(getMock).toHaveBeenCalledTimes(1);
  });

  it('should navigate to /error when products request fails', async () => {
    const mockCategories: ICategory[] = [{ id: 1, title: { pt: 'Burgers', en: 'Burgers' } }];

    getMock
      .mockResolvedValueOnce({ data: mockCategories })
      .mockRejectedValueOnce(new Error('Products error'));

    renderHook(() => useProducts(1), {
      wrapper: createWrapper(),
    });

    await waitFor(() => {
      expect(navigateMock).toHaveBeenCalledWith('/error');
    });
  });

  it('should be loading initially', () => {
    getMock.mockResolvedValueOnce({ data: [] });

    const { result } = renderHook(() => useProducts(1), {
      wrapper: createWrapper(),
    });

    expect(result.current.isLoading).toBe(true);
  });

  it('should call APIs with correct URLs', async () => {
    getMock.mockResolvedValueOnce({ data: [] }).mockResolvedValueOnce({ data: [] });

    renderHook(() => useProducts(2), {
      wrapper: createWrapper(),
    });

    await waitFor(() => {
      expect(getMock).toHaveBeenCalledTimes(2);
    });

    expect(getMock).toHaveBeenNthCalledWith(1, 'http://api.test/categories');

    expect(getMock).toHaveBeenNthCalledWith(2, 'http://api.test/products/2');
  });
});
