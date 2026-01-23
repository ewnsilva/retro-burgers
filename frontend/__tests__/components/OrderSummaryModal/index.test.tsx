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
    title: {
      pt: 'Hambúrguer',
      en: 'Burger',
    },
    quantity: 2,
    totalPrice: 20,
    isCustom: true,
    additionals: [
      {
        id: 10,
        title: {
          pt: 'Queijo extra',
          en: 'Extra cheese',
        },
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

  it('renders modal content', () => {
    render(<OrderSummaryModal open onClose={onCloseMock} onConfirm={onConfirmMock} />);

    expect(screen.getByText('orderSummary.title')).toBeTruthy();
    expect(screen.getByText(content => content.includes('Hambúrguer'))).toBeTruthy();

    expect(
      screen.getByText(content => content.includes('x') && content.includes('2'))
    ).toBeTruthy();

    expect(
      screen.getByText(content => content.includes('currency.brl') && content.includes('20.00'))
    ).toBeTruthy();
  });

  it('renders custom chip', () => {
    render(<OrderSummaryModal open onClose={onCloseMock} onConfirm={onConfirmMock} />);
    expect(screen.getByText('Custom')).toBeTruthy();
  });

  it('renders additionals', () => {
    render(<OrderSummaryModal open onClose={onCloseMock} onConfirm={onConfirmMock} />);

    expect(
      screen.getByText(content => content.includes('Queijo extra') && content.includes('x1'))
    ).toBeTruthy();
  });

  it('calls onClose', () => {
    render(<OrderSummaryModal open onClose={onCloseMock} onConfirm={onConfirmMock} />);
    fireEvent.click(screen.getByText('orderSummary.edit'));
    expect(onCloseMock).toHaveBeenCalled();
  });

  it('calls onConfirm', () => {
    render(<OrderSummaryModal open onClose={onCloseMock} onConfirm={onConfirmMock} />);
    fireEvent.click(screen.getByText('orderSummary.confirm'));
    expect(onConfirmMock).toHaveBeenCalled();
  });

  it('renders content in English', () => {
    vi.mocked(useLanguage).mockReturnValueOnce({
      language: 'en',
      t: (key: string) => key,
    } as any);

    render(<OrderSummaryModal open onClose={onCloseMock} onConfirm={onConfirmMock} />);

    expect(screen.getByText(content => content.includes('Burger'))).toBeTruthy();

    expect(screen.getByText(content => content.includes('Extra cheese'))).toBeTruthy();

    expect(screen.getByText(content => content.includes('currency.usd'))).toBeTruthy();
  });
});
