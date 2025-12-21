import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';

import { OrderSummaryModal } from '../../../src/components/OrderSummaryModal';

import { useLanguage, useCart } from '../../../src/utils/hooks';

vi.mock('../../../src/utils/hooks', () => ({
  useCart: vi.fn(),
  useLanguage: vi.fn(),
}));

const mockCartItems = [
  {
    id: 1,
    namePt: 'Hambúrguer',
    nameEn: 'Burger',
    quantity: 2,
    pricePt: 10,
    priceEn: 2,
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
      changeLanguage: vi.fn(),
    } as any);

    vi.mocked(useCart).mockReturnValue({
      cartItems: mockCartItems,
      updateValue: vi.fn(() => 'R$ 20.00'),
    } as any);
  });

  it('renders the modal when open is true', () => {
    render(<OrderSummaryModal open={true} onClose={onCloseMock} onConfirm={onConfirmMock} />);

    expect(screen.getByText('orderSummary.title')).toBeTruthy();
    expect(screen.getByText('Hambúrguer x2')).toBeTruthy();
    expect(screen.getByText('currency.brl20.00')).toBeTruthy();

    expect(screen.getByText(/orderSummary\.total/)).toBeTruthy();

    expect(screen.getByText('orderSummary.edit')).toBeTruthy();
    expect(screen.getByText('orderSummary.confirm')).toBeTruthy();
  });

  it('calls onClose when edit button is clicked', () => {
    render(<OrderSummaryModal open={true} onClose={onCloseMock} onConfirm={onConfirmMock} />);

    fireEvent.click(screen.getByText('orderSummary.edit'));

    expect(onCloseMock).toHaveBeenCalledTimes(1);
  });

  it('calls onConfirm when confirm button is clicked', () => {
    render(<OrderSummaryModal open={true} onClose={onCloseMock} onConfirm={onConfirmMock} />);

    fireEvent.click(screen.getByText('orderSummary.confirm'));

    expect(onConfirmMock).toHaveBeenCalledTimes(1);
  });

  it('renders product name and price in English when language is en', () => {
    vi.mocked(useLanguage).mockReturnValueOnce({
      language: 'en',
      t: (key: string) => key,
      changeLanguage: vi.fn(),
    } as any);

    render(<OrderSummaryModal open={true} onClose={onCloseMock} onConfirm={onConfirmMock} />);

    expect(screen.getByText('Burger x2')).toBeTruthy();
    expect(screen.getByText('currency.usd4.00')).toBeTruthy();
  });
});
