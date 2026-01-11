import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { ThemeProvider, createTheme } from '@mui/material/styles';

import { CartButton } from '../../../src/components/CartButton';

const setIsDrawerOpenMock = vi.fn();

vi.mock('utils/hooks/products/useCart', () => ({
  useCart: () => ({
    setIsDrawerOpen: setIsDrawerOpenMock,
    totalQuantity: 3,
  }),
}));

vi.mock('@mui/icons-material', () => ({
  ShoppingCart: () => <svg data-testid="shopping-cart-icon" />,
}));

const renderWithTheme = (ui: React.ReactNode) => {
  return render(<ThemeProvider theme={createTheme()}>{ui}</ThemeProvider>);
};

describe('CartButton component', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('renders the shopping cart button', () => {
    renderWithTheme(<CartButton />);

    expect(screen.getByTestId('shopping-cart-icon')).toBeTruthy();
  });

  it('passes totalQuantity to the Badge component', () => {
    renderWithTheme(<CartButton />);

    const badge = document.querySelector('.MuiBadge-badge');
    expect(badge).toBeTruthy();
  });

  it('opens the drawer when clicking the button', () => {
    renderWithTheme(<CartButton />);

    fireEvent.click(screen.getByRole('button'));

    expect(setIsDrawerOpenMock).toHaveBeenCalledTimes(1);
    expect(setIsDrawerOpenMock).toHaveBeenCalledWith(true);
  });
});
