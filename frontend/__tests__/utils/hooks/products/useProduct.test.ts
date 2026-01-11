import { describe, it, expect, vi, beforeEach } from 'vitest';
import { renderHook, act, waitFor } from '@testing-library/react';
import { useProducts } from '../../../../src/utils/hooks/products/useProducts';

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

describe('useProducts hook', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    process.env.REACT_APP_API_URL = 'http://api.test';
  });

  it('should initialize with default products state', () => {
    const { result } = renderHook(() => useProducts());

    expect(result.current.products).toHaveLength(1);
  });

  it('should call API with correct url and update products', async () => {
    const mockProducts = [
      { id: 1, name: 'Product 1' },
      { id: 2, name: 'Product 2' },
    ];

    getMock.mockResolvedValueOnce({ data: mockProducts });

    const { result } = renderHook(() => useProducts());

    await act(async () => {
      result.current.fetchProducts(10);
    });

    await waitFor(() => {
      expect(result.current.products).toEqual(mockProducts);
    });

    expect(getMock).toHaveBeenCalledWith('http://api.test/products/10');
  });

  it('should navigate to /error when API request fails', async () => {
    getMock.mockRejectedValueOnce(new Error('API error'));

    const { result } = renderHook(() => useProducts());

    await act(async () => {
      result.current.fetchProducts(0);
    });

    await waitFor(() => {
      expect(navigateMock).toHaveBeenCalledWith('/error');
    });
  });
});
