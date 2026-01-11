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

const productMock = {
  id: 1,
  namePt: 'Hambúrguer',
  nameEn: 'Burger',
  descriptionPt: 'Descrição PT',
  descriptionEn: 'Description EN',
  pricePt: 10,
  priceEn: 2,
  image: 'img.png',
};

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
    render(<ProductCard item={productMock} />);

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

    render(<ProductCard item={productMock} />);

    expect(screen.getByText('Burger')).toBeTruthy();
    expect(screen.getByText('Description EN')).toBeTruthy();
    expect(screen.getByText('currency.usd2.00')).toBeTruthy();
  });

  it('shows add to cart button when product is not in cart', () => {
    render(<ProductCard item={productMock} />);

    fireEvent.click(screen.getByRole('button'));

    expect(addToCartMock).toHaveBeenCalledWith(productMock);
  });

  it('shows quantity controls when product is in cart', () => {
    vi.mocked(useCart).mockReturnValueOnce({
      cartItems: [{ ...productMock, quantity: 2 }],
      isInCart: () => true,
      addToCart: addToCartMock,
      incrementQuantity: incrementQuantityMock,
      decrementQuantity: decrementQuantityMock,
    } as any);

    render(<ProductCard item={productMock} />);

    expect(screen.getByText('2')).toBeTruthy();
    expect(screen.getByTestId('AddIcon')).toBeTruthy();
    expect(screen.getByTestId('RemoveIcon')).toBeTruthy();
  });

  it('calls incrementQuantity and decrementQuantity correctly', () => {
    vi.mocked(useCart).mockReturnValueOnce({
      cartItems: [{ ...productMock, quantity: 2 }],
      isInCart: () => true,
      addToCart: addToCartMock,
      incrementQuantity: incrementQuantityMock,
      decrementQuantity: decrementQuantityMock,
    } as any);

    render(<ProductCard item={productMock} />);

    fireEvent.click(screen.getByTestId('AddIcon'));
    fireEvent.click(screen.getByTestId('RemoveIcon'));

    expect(incrementQuantityMock).toHaveBeenCalledWith(1);
    expect(decrementQuantityMock).toHaveBeenCalledWith(1);
  });

  it('renders delete icon when quantity is 1', () => {
    vi.mocked(useCart).mockReturnValueOnce({
      cartItems: [{ ...productMock, quantity: 1 }],
      isInCart: () => true,
      addToCart: addToCartMock,
      incrementQuantity: incrementQuantityMock,
      decrementQuantity: decrementQuantityMock,
    } as any);

    render(<ProductCard item={productMock} />);

    expect(screen.getByTestId('DeleteIcon')).toBeTruthy();
  });
});
