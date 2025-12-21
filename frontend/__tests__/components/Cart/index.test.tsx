import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import type { TFunction } from 'i18next';

import { Cart } from '../../../src/components/Cart';

import { useLanguage } from '../../../src/utils/hooks/useLanguage';
import { useCartLogic } from '../../../src/components/Cart/Cart.logic';

import type { IProducts } from '../../../src/utils/interfaces';

const createMockCartItem = (overrides?: Partial<IProducts>): IProducts => ({
  id: 1,
  namePt: 'Hambúrguer',
  nameEn: 'Burger',
  pricePt: 10,
  priceEn: 2,
  image: 'img.png',
  ...overrides,
});

const baseCartLogicMock = {
  cartItems: [createMockCartItem()],
  isDrawerOpen: true,
  totalQuantity: 2,
  summaryOpen: false,
  successOpen: false,
  closeDrawer: vi.fn(),
  openSummary: vi.fn(),
  confirmOrder: vi.fn(),
  setSummaryOpen: vi.fn(),
  setSuccessOpen: vi.fn(),
  clearCart: vi.fn(),
  decrementQuantity: vi.fn(),
  incrementQuantity: vi.fn(),
  removeItem: vi.fn(),
  updateValue: vi.fn(() => 'R$ 20,00'),
};

vi.mock('components', () => ({
  OrderSummaryModal: ({ open }: { open: boolean }) =>
    open ? <div data-testid="order-summary-modal" /> : null,

  OrderSuccessModal: ({ open }: { open: boolean }) =>
    open ? <div data-testid="order-success-modal" /> : null,
}));

vi.mock('../../../src/utils/hooks/useLanguage', () => ({
  useLanguage: vi.fn(),
}));

vi.mock('../../../src/components/Cart/Cart.logic', () => ({
  useCartLogic: vi.fn(),
}));

describe('Cart component', () => {
  beforeEach(() => {
    vi.clearAllMocks();

    vi.mocked(useLanguage).mockReturnValue({
      language: 'pt',
      t: ((key: string) => key) as unknown as TFunction<'translation'>,
      changeLanguage: vi.fn(),
    });

    vi.mocked(useCartLogic).mockReturnValue(baseCartLogicMock);
  });

  it('renders the shopping cart with items', () => {
    render(<Cart />);

    expect(screen.getByText('cart.title')).toBeTruthy();
    expect(screen.getByText('Hambúrguer')).toBeTruthy();

    expect(screen.getByText(content => content.includes('cart.total'))).toBeTruthy();
  });

  it('close the drawer by clicking the X.', () => {
    render(<Cart />);

    fireEvent.click(screen.getByText('X'));

    expect(baseCartLogicMock.closeDrawer).toHaveBeenCalled();
  });

  it('clearCart is called when you click Clear.', () => {
    render(<Cart />);

    fireEvent.click(screen.getByText('Limpar'));

    expect(baseCartLogicMock.clearCart).toHaveBeenCalled();
  });

  it('open the order summary by clicking on Place Order.', () => {
    render(<Cart />);

    fireEvent.click(screen.getByText('cart.order'));

    expect(baseCartLogicMock.openSummary).toHaveBeenCalled();
  });

  it('increases and decreases the quantity of the item.', () => {
    render(<Cart />);

    fireEvent.click(screen.getByTestId('AddIcon'));
    fireEvent.click(screen.getByTestId('RemoveIcon'));

    expect(baseCartLogicMock.incrementQuantity).toHaveBeenCalledWith(1);
    expect(baseCartLogicMock.decrementQuantity).toHaveBeenCalledWith(1);
  });

  it('renders the summary modal when summaryOpen = true.', () => {
    vi.mocked(useCartLogic).mockReturnValueOnce({
      ...baseCartLogicMock,
      summaryOpen: true,
    });

    render(<Cart />);

    expect(screen.getByTestId('order-summary-modal')).toBeTruthy();
  });

  it('renders the success modal when successOpen = true.', () => {
    vi.mocked(useCartLogic).mockReturnValueOnce({
      ...baseCartLogicMock,
      successOpen: true,
    });

    render(<Cart />);

    expect(screen.getByTestId('order-success-modal')).toBeTruthy();
  });
});
