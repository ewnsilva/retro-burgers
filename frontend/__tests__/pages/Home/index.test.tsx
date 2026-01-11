import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';

import { Home } from '../../../src/pages/Home';
import { useHomeLogic } from '../../../src/pages/Home/Home.logic';

vi.mock('../../../src/pages/Home/Home.logic', () => ({
  useHomeLogic: vi.fn(),
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
    <button data-testid="navigation" onClick={() => setCategory(2)}>
      navigation
    </button>
  ),
}));

vi.mock('../../../src/components/Layout/Footer', () => ({
  Footer: () => <footer data-testid="footer">footer</footer>,
}));

vi.mock('../../../src/components/Cart', () => ({
  Cart: ({ onOrderSuccess }: { onOrderSuccess: () => void }) => (
    <button data-testid="cart" onClick={onOrderSuccess}>
      cart
    </button>
  ),
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

vi.mock('../../../src/components/OrderSuccessModal', () => ({
  OrderSuccessModal: ({ open }: { open: boolean }) =>
    open ? <div data-testid="order-success-modal" /> : null,
}));

describe('Home component', () => {
  const mockLogic = {
    filteredProducts: [
      { id: 1, namePt: 'Hambúrguer' },
      { id: 2, namePt: 'Batata' },
    ],
    additionals: [],
    totalQuantity: 0,

    category: 1,
    customizeOpen: false,
    orderSuccessOpen: false,
    search: '',
    selectedProduct: {},
    showHint: false,

    setCategory: vi.fn(),
    setCustomizeOpen: vi.fn(),
    setOrderSuccessOpen: vi.fn(),
    setSearch: vi.fn(),
    setSelectedProduct: vi.fn(),
    setShowHint: vi.fn(),

    addToCart: vi.fn(),
    fetchAdditionals: vi.fn(),
  };

  beforeEach(() => {
    vi.clearAllMocks();
    vi.mocked(useHomeLogic).mockReturnValue(mockLogic as any);
  });

  it('renders base layout components', () => {
    render(<Home />);

    expect(screen.getByTestId('cart')).toBeTruthy();
    expect(screen.getByTestId('footer')).toBeTruthy();
    expect(screen.getByTestId('header-search')).toBeTruthy();
    expect(screen.getByTestId('navigation')).toBeTruthy();
  });

  it('renders product cards', () => {
    render(<Home />);

    const products = screen.getAllByTestId('product-card');
    expect(products).toHaveLength(2);
  });

  it('calls setSearch when Header triggers search', () => {
    render(<Home />);

    fireEvent.click(screen.getByTestId('header-search'));

    expect(mockLogic.setSearch).toHaveBeenCalledWith('hamb');
  });

  it('calls setCategory when Navigation changes category', () => {
    render(<Home />);

    fireEvent.click(screen.getByTestId('navigation'));

    expect(mockLogic.setCategory).toHaveBeenCalledWith(2);
  });

  it('renders MenuHint after WelcomeModal finishes', () => {
    vi.mocked(useHomeLogic).mockReturnValueOnce({
      ...mockLogic,
      showHint: true,
    } as any);

    render(<Home />);

    expect(screen.getByTestId('menu-hint')).toBeTruthy();
  });

  it('does not render CartButton when cart is empty', () => {
    render(<Home />);

    expect(screen.queryByTestId('cart-button')).toBeNull();
  });

  it('opens OrderSuccessModal when Cart triggers success', () => {
    render(<Home />);

    fireEvent.click(screen.getByTestId('cart'));

    expect(mockLogic.setOrderSuccessOpen).toHaveBeenCalledWith(true);
  });
});
