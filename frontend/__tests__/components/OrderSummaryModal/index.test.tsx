import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';

import { OrderSummaryModal } from '../../../src/components/OrderSummaryModal';

import { useLanguage } from '../../../src/utils/hooks/useLanguage';
import { useCart } from '../../../src/utils/hooks/products/useCart';

vi.mock('../../../src/utils/hooks/useLanguage', () => ({
  useLanguage: vi.fn(),
}));

vi.mock('../../../src/utils/hooks/products/useCart', () => ({
  useCart: vi.fn(),
}));

const mockCartItems = [
  {
    id: 1,
    namePt: 'Hambúrguer',
    nameEn: 'Burger',
    quantity: 2,
    totalPrice: 20,
    isCustom: true,
    additionals: [
      {
        id: 10,
        namePt: 'Queijo extra',
        nameEn: 'Extra cheese',
        type: 'quantity',
        quantity: 1,
      },
    ],
  },
];

describe('OrderSummaryModal component', () => {
  const onCloseMock = vi.fn();
  const onConfirmMock = vi.fn();

  beforeEach(() => {
    vi.clearAllMocks();

    vi.mocked(useLanguage).mockReturnValue({
      language: 'pt',
      t: (key: string) => key,
    } as any);

    vi.mocked(useCart).mockReturnValue({
      cartItems: mockCartItems,
      updateValue: vi.fn(() => 'R$ 20.00'),
    } as any);
  });

  it('renders the modal when open is true', () => {
    render(<OrderSummaryModal open onClose={onCloseMock} onConfirm={onConfirmMock} />);

    expect(screen.getByText('orderSummary.title')).toBeTruthy();
    expect(screen.getByText('Hambúrguer x2')).toBeTruthy();
    expect(screen.getByText('currency.brl20.00')).toBeTruthy();
    expect(screen.getByText(/orderSummary\.total\s*R\$\s*20\.00/)).toBeTruthy();
  });

  it('renders custom chip when item is custom', () => {
    render(<OrderSummaryModal open onClose={onCloseMock} onConfirm={onConfirmMock} />);

    expect(screen.getByText('Custom')).toBeTruthy();
  });

  it('renders additionals when item is custom', () => {
    render(<OrderSummaryModal open onClose={onCloseMock} onConfirm={onConfirmMock} />);

    expect(screen.getByText('• Queijo extra x1')).toBeTruthy();
  });

  it('calls onClose when edit button is clicked', () => {
    render(<OrderSummaryModal open onClose={onCloseMock} onConfirm={onConfirmMock} />);

    fireEvent.click(screen.getByText('orderSummary.edit'));

    expect(onCloseMock).toHaveBeenCalledTimes(1);
  });

  it('calls onConfirm when confirm button is clicked', () => {
    render(<OrderSummaryModal open onClose={onCloseMock} onConfirm={onConfirmMock} />);

    fireEvent.click(screen.getByText('orderSummary.confirm'));

    expect(onConfirmMock).toHaveBeenCalledTimes(1);
  });

  it('renders product name, additionals and price in English', () => {
    vi.mocked(useLanguage).mockReturnValueOnce({
      language: 'en',
      t: (key: string) => key,
    } as any);

    render(<OrderSummaryModal open onClose={onCloseMock} onConfirm={onConfirmMock} />);

    expect(screen.getByText('Burger x2')).toBeTruthy();
    expect(screen.getByText('• Extra cheese x1')).toBeTruthy();
    expect(screen.getByText('currency.usd20.00')).toBeTruthy();
  });
});
