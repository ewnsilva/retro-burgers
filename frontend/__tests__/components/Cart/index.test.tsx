import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import type { TFunction } from 'i18next';

import { Cart } from '../../../src/components/Cart';

import { useLanguage } from '../../../src/utils/hooks/useLanguage';
import { useCartLogic } from '../../../src/components/Cart/Cart.logic';

import type { ICartProducts } from '../../../src/utils/interfaces';

const createMockCartItem = (overrides?: Partial<ICartProducts>): ICartProducts => ({
  id: 1,
  title: { pt: 'Hambúrguer', en: 'Burger' },
  price: { brl: '20', usd: '4' },
  logo: 'img.png',
  quantity: 2,
  isCustom: false,
  additionals: [],
  category_id: 1,
  description: { pt: '', en: '' },
  ...overrides,
});

const cartLogicMock = {
  cartItems: [createMockCartItem()],
  isDrawerOpen: true,
  totalQuantity: 2,
  summaryOpen: false,

  closeDrawer: vi.fn(),
  openSummary: vi.fn(),
  confirmOrder: vi.fn(),
  setSummaryOpen: vi.fn(),
  clearCart: vi.fn(),
  decrementQuantity: vi.fn(),
  incrementQuantity: vi.fn(),
  removeItem: vi.fn(),
  updateValue: vi.fn(() => ' R$ 40'),
};

vi.mock('@mui/material', async () => {
  const actual = await vi.importActual<any>('@mui/material');

  return {
    ...actual,
    Drawer: ({ open, children }: any) => (open ? <div>{children}</div> : null),
  };
});

vi.mock('@mui/icons-material', () => ({
  Delete: () => <span data-testid="DeleteIcon" />,
  Add: () => <span data-testid="AddIcon" />,
  Remove: () => <span data-testid="RemoveIcon" />,
  ShoppingCart: () => <span data-testid="ShoppingCartIcon" />,
  ExitToApp: () => <span data-testid="ExitToAppIcon" />,
}));

vi.mock('../../../src/components/OrderSummaryModal', () => ({
  OrderSummaryModal: ({ open, onConfirm }: { open: boolean; onConfirm: () => void }) =>
    open ? (
      <button data-testid="order-summary-modal" onClick={onConfirm}>
        Confirm
      </button>
    ) : null,
}));

vi.mock('../../../src/utils/hooks/useLanguage', () => ({
  useLanguage: vi.fn(),
}));

vi.mock('../../../src/components/Cart/Cart.logic', () => ({
  useCartLogic: vi.fn(),
}));

describe('Cart component', () => {
  const onOrderSuccess = vi.fn();

  beforeEach(() => {
    vi.clearAllMocks();

    vi.mocked(useLanguage).mockReturnValue({
      language: 'pt',
      t: ((key: string) => key) as unknown as TFunction<'translation'>,
      changeLanguage: vi.fn(),
    });

    vi.mocked(useCartLogic).mockReturnValue(cartLogicMock);
  });

  it('renders cart title and items', () => {
    render(<Cart onOrderSuccess={onOrderSuccess} />);

    expect(screen.getByText('cart.title')).toBeTruthy();
    expect(screen.getByText('Hambúrguer')).toBeTruthy();
    expect(screen.getByText(content => content.includes('cart.total'))).toBeTruthy();
  });

  it('closes drawer when clicking X', () => {
    render(<Cart onOrderSuccess={onOrderSuccess} />);

    fireEvent.click(screen.getByRole('button', { name: 'cart.close' }));

    expect(cartLogicMock.closeDrawer).toHaveBeenCalled();
  });

  it('clears cart when clicking clear button', () => {
    render(<Cart onOrderSuccess={onOrderSuccess} />);

    fireEvent.click(screen.getByText('cart.clear'));

    expect(cartLogicMock.clearCart).toHaveBeenCalled();
  });

  it('opens summary when clicking order button', () => {
    render(<Cart onOrderSuccess={onOrderSuccess} />);

    fireEvent.click(screen.getByText('cart.order'));

    expect(cartLogicMock.openSummary).toHaveBeenCalled();
  });

  it('increments and decrements item quantity', () => {
    render(<Cart onOrderSuccess={onOrderSuccess} />);

    fireEvent.click(screen.getByTestId('AddIcon'));
    fireEvent.click(screen.getByTestId('RemoveIcon'));

    expect(cartLogicMock.incrementQuantity).toHaveBeenCalledWith(1);
    expect(cartLogicMock.decrementQuantity).toHaveBeenCalledWith(1);
  });

  it('renders OrderSummaryModal when summaryOpen is true', () => {
    vi.mocked(useCartLogic).mockReturnValueOnce({
      ...cartLogicMock,
      summaryOpen: true,
    });

    render(<Cart onOrderSuccess={onOrderSuccess} />);

    expect(screen.getByTestId('order-summary-modal')).toBeTruthy();
  });

  it('confirms order and closes drawer when confirming summary', () => {
    vi.mocked(useCartLogic).mockReturnValueOnce({
      ...cartLogicMock,
      summaryOpen: true,
    });

    render(<Cart onOrderSuccess={onOrderSuccess} />);

    fireEvent.click(screen.getByTestId('order-summary-modal'));

    expect(cartLogicMock.confirmOrder).toHaveBeenCalled();
    expect(onOrderSuccess).toHaveBeenCalled();
    expect(cartLogicMock.closeDrawer).toHaveBeenCalled();
  });
});
