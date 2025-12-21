import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';

import { CartButton } from '../../../src/components/CartButton';

const setIsDrawerOpenMock = vi.fn();

vi.mock('utils', () => ({
  useCart: () => ({
    setIsDrawerOpen: setIsDrawerOpenMock,
    totalQuantity: 3,
  }),
}));

vi.mock('@mui/icons-material', () => ({
  ShoppingCart: () => <svg data-testid="shopping-cart-icon" />,
}));

describe('CartButton component', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('renders the shopping cart button', () => {
    render(<CartButton />);

    expect(screen.getByTestId('shopping-cart-icon')).toBeTruthy();
  });

  it('displays the total number of items on the badge.', () => {
    render(<CartButton />);

    expect(screen.getByText('3')).toBeTruthy();
  });

  it('open the drawer by clicking the button.', () => {
    render(<CartButton />);

    fireEvent.click(screen.getByRole('button'));

    expect(setIsDrawerOpenMock).toHaveBeenCalledWith(true);
  });
});
