import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';

import { ProductCard } from '../../../src/components/Product';
import { useLanguage } from '../../../src/utils/hooks/useLanguage';
import { useCart } from '../../../src/utils/hooks/products/useCart';

vi.mock('../../../src/utils/hooks/useLanguage', () => ({
  useLanguage: vi.fn(),
}));

vi.mock('../../../src/utils/hooks/products/useCart', () => ({
  useCart: vi.fn(),
}));

vi.mock('@mui/material', async () => {
  const actual = await vi.importActual<any>('@mui/material');

  return {
    ...actual,
    Card: ({ children }: any) => <div>{children}</div>,
    CardContent: ({ children }: any) => <div>{children}</div>,
    CardMedia: () => <img />,
    IconButton: ({ children, onClick }: any) => <button onClick={onClick}>{children}</button>,
    Button: ({ children, onClick }: any) => <button onClick={onClick}>{children}</button>,
    Tooltip: ({ children }: any) => <>{children}</>,
    Skeleton: () => <div />,
    useMediaQuery: () => false,
    useTheme: () => ({
      palette: {
        secondary: { main: '#000' },
        error: { main: '#000' },
      },
    }),
  };
});

vi.mock('@mui/icons-material', () => ({
  Add: () => <span data-testid="AddIcon" />,
  Remove: () => <span data-testid="RemoveIcon" />,
  Delete: () => <span data-testid="DeleteIcon" />,
  ShoppingCart: () => <span data-testid="ShoppingCartIcon" />,
  LunchDining: () => <span data-testid="LunchDiningIcon" />,
  BrokenImage: () => <span />,
}));

const productMock = {
  id: 1,
  title: { pt: 'Hambúrguer', en: 'Burger' },
  description: { pt: 'Descrição PT', en: 'Description EN' },
  price: { brl: '10', usd: '2' },
  logo: 'img.png',
};

const setCustomizeOpenMock = vi.fn();
const setSelectedProductMock = vi.fn();

describe('ProductCard component', () => {
  const addToCartMock = vi.fn();
  const incrementQuantityMock = vi.fn();
  const decrementQuantityMock = vi.fn();

  beforeEach(() => {
    vi.clearAllMocks();

    vi.mocked(useLanguage).mockReturnValue({
      language: 'pt',
      t: (key: string) => key,
      changeLanguage: vi.fn(),
    } as any);

    vi.mocked(useCart).mockReturnValue({
      cartItems: [],
      isInCart: () => false,
      addToCart: addToCartMock,
      incrementQuantity: incrementQuantityMock,
      decrementQuantity: decrementQuantityMock,
    } as any);
  });

  it('renders product information in Portuguese', () => {
    render(
      <ProductCard
        item={productMock}
        setCustomizeOpen={setCustomizeOpenMock}
        setSelectedProduct={setSelectedProductMock}
      />
    );

    expect(screen.getByText('Hambúrguer')).toBeTruthy();
    expect(screen.getByText('Descrição PT')).toBeTruthy();
    expect(screen.getByText('currency.brl10.00')).toBeTruthy();
  });

  it('renders product information in English', () => {
    vi.mocked(useLanguage).mockReturnValueOnce({
      language: 'en',
      t: (key: string) => key,
      changeLanguage: vi.fn(),
    } as any);

    render(
      <ProductCard
        item={productMock}
        setCustomizeOpen={setCustomizeOpenMock}
        setSelectedProduct={setSelectedProductMock}
      />
    );

    expect(screen.getByText('Burger')).toBeTruthy();
    expect(screen.getByText('Description EN')).toBeTruthy();
    expect(screen.getByText('currency.usd2.00')).toBeTruthy();
  });

  it('adds product to cart', () => {
    render(
      <ProductCard
        item={productMock}
        setCustomizeOpen={setCustomizeOpenMock}
        setSelectedProduct={setSelectedProductMock}
      />
    );

    fireEvent.click(screen.getByTestId('ShoppingCartIcon'));

    expect(addToCartMock).toHaveBeenCalledWith(productMock);
  });

  it('shows quantity controls when product is in cart', () => {
    vi.mocked(useCart).mockReturnValueOnce({
      cartItems: [{ id: 1, quantity: 2 }],
      isInCart: () => true,
      addToCart: addToCartMock,
      incrementQuantity: incrementQuantityMock,
      decrementQuantity: decrementQuantityMock,
    } as any);

    render(
      <ProductCard
        item={productMock}
        setCustomizeOpen={setCustomizeOpenMock}
        setSelectedProduct={setSelectedProductMock}
      />
    );

    expect(screen.getByText('2')).toBeTruthy();
    expect(screen.getByTestId('AddIcon')).toBeTruthy();
    expect(screen.getByTestId('RemoveIcon')).toBeTruthy();
  });

  it('increments and decrements quantity', () => {
    vi.mocked(useCart).mockReturnValueOnce({
      cartItems: [{ id: 1, quantity: 2 }],
      isInCart: () => true,
      addToCart: addToCartMock,
      incrementQuantity: incrementQuantityMock,
      decrementQuantity: decrementQuantityMock,
    } as any);

    render(
      <ProductCard
        item={productMock}
        setCustomizeOpen={setCustomizeOpenMock}
        setSelectedProduct={setSelectedProductMock}
      />
    );

    fireEvent.click(screen.getByTestId('AddIcon'));
    fireEvent.click(screen.getByTestId('RemoveIcon'));

    expect(incrementQuantityMock).toHaveBeenCalledWith(1);
    expect(decrementQuantityMock).toHaveBeenCalledWith(1);
  });

  it('renders delete icon when quantity is 1', () => {
    vi.mocked(useCart).mockReturnValueOnce({
      cartItems: [{ id: 1, quantity: 1 }],
      isInCart: () => true,
      addToCart: addToCartMock,
      incrementQuantity: incrementQuantityMock,
      decrementQuantity: decrementQuantityMock,
    } as any);

    render(
      <ProductCard
        item={productMock}
        setCustomizeOpen={setCustomizeOpenMock}
        setSelectedProduct={setSelectedProductMock}
      />
    );

    expect(screen.getByTestId('DeleteIcon')).toBeTruthy();
  });
});
