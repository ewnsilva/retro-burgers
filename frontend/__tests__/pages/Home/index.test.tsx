import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';

import { Home } from '../../../src/pages/Home';

const fetchProductsMock = vi.fn();
const fetchAdditionalsMock = vi.fn();
const addToCartMock = vi.fn();

vi.mock('../../../src/utils/hooks/products/useCart', () => ({
  useCart: () => ({
    totalQuantity: 0,
    addToCart: addToCartMock,
  }),
}));

vi.mock('../../../src/utils/hooks/products/useProducts', () => ({
  useProducts: () => ({
    products: [
      {
        id: 1,
        namePt: 'Hambúrguer',
        nameEn: 'Burger',
      },
      {
        id: 2,
        namePt: 'Batata',
        nameEn: 'Fries',
      },
    ],
    additionals: [],
    fetchProducts: fetchProductsMock,
    fetchAdditionals: fetchAdditionalsMock,
  }),
}));

vi.mock('../../../src/utils/hooks/useLanguage', () => ({
  useLanguage: () => ({
    language: 'pt',
  }),
}));

vi.mock('../../../src/components/Layout/Header', () => ({
  Header: ({ setSearch }: { setSearch: (value: string) => void }) => (
    <button data-testid="header-search" onClick={() => setSearch('hamb')}>
      header
    </button>
  ),
}));

vi.mock('../../../src/components/Layout/Navigation', () => ({
  Navigation: ({ setCategory }: any) => (
    <button data-testid="navigation" onClick={() => setCategory(1)}>
      navigation
    </button>
  ),
}));

vi.mock('../../../src/components/Layout/Footer', () => ({
  Footer: () => <footer data-testid="footer">footer</footer>,
}));

vi.mock('../../../src/components/Cart', () => ({
  Cart: () => <div data-testid="cart">cart</div>,
}));

vi.mock('../../../src/components/CartButton', () => ({
  CartButton: () => <div data-testid="cart-button">cart-button</div>,
}));

vi.mock('../../../src/components/Product', () => ({
  ProductCard: ({ item }: any) => <div data-testid="product-card">{item.namePt}</div>,
}));

vi.mock('../../../src/components/MenuHint', () => ({
  MenuHint: () => <div data-testid="menu-hint">menu-hint</div>,
}));

vi.mock('../../../src/components/WelcomeModal', () => ({
  WelcomeModal: ({ onFinish }: { onFinish: () => void }) => (
    <button data-testid="welcome-modal" onClick={onFinish}>
      welcome-modal
    </button>
  ),
}));

vi.mock('../../../src/components/CostumizeBurgerModal', () => ({
  CustomizeBurgerModal: ({ open }: { open: boolean }) =>
    open ? <div data-testid="customize-modal" /> : null,
}));

describe('Home page', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('renders base layout components', () => {
    render(<Home />);

    expect(screen.getByTestId('cart')).toBeTruthy();
    expect(screen.getByTestId('footer')).toBeTruthy();
    expect(screen.getByTestId('header-search')).toBeTruthy();
    expect(screen.getByTestId('navigation')).toBeTruthy();
  });

  it('calls fetchProducts and fetchAdditionals on mount with initial category', () => {
    render(<Home />);

    expect(fetchProductsMock).toHaveBeenCalledWith(0);
    expect(fetchAdditionalsMock).toHaveBeenCalled();
  });

  it('calls fetchProducts again when category changes', () => {
    render(<Home />);

    fireEvent.click(screen.getByTestId('navigation'));

    expect(fetchProductsMock).toHaveBeenCalledWith(1);
  });

  it('filters products based on search text', () => {
    render(<Home />);

    fireEvent.click(screen.getByTestId('header-search'));

    const products = screen.getAllByTestId('product-card');
    expect(products).toHaveLength(1);
    expect(products[0].textContent).toContain('Hambúrguer');
  });

  it('renders MenuHint after WelcomeModal finishes', () => {
    render(<Home />);

    fireEvent.click(screen.getByTestId('welcome-modal'));

    expect(screen.getByTestId('menu-hint')).toBeTruthy();
  });

  it('does not render CartButton when cart is empty', () => {
    render(<Home />);

    expect(screen.queryByTestId('cart-button')).not.toBeTruthy();
  });
});
