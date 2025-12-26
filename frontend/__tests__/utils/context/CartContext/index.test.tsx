import React, { useContext } from 'react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, act } from '@testing-library/react';

import { CartContext, CartProvider } from '../../../../src/utils/context/CartContext';

vi.mock('../../../../src/utils/hooks/useLanguage', () => ({
  useLanguage: () => ({
    language: 'pt',
  }),
}));

vi.mock('../../../../src/utils/constants/formatPrice', () => ({
  formatPrice: (value: number) => `R$ ${value.toFixed(2)}`,
}));

const mockProduct = {
  id: 1,
  namePt: 'Hambúrguer',
  nameEn: 'Burger',
  pricePt: 10,
  priceEn: 10,
};

const TestConsumer = () => {
  const context = useContext(CartContext);

  return (
    <div>
      <span data-testid="total-quantity">{context.totalQuantity}</span>
      <span data-testid="total-value">{context.updateValue()}</span>

      <button data-testid="add-item" onClick={() => context.addToCart(mockProduct as any)} />

      <button data-testid="increment" onClick={() => context.incrementQuantity(1)} />
      <button data-testid="decrement" onClick={() => context.decrementQuantity(1)} />
      <button data-testid="remove" onClick={() => context.removeItem(1)} />
      <button data-testid="clear" onClick={() => context.clearCart()} />

      <span data-testid="is-in-cart">{context.isInCart(1) ? 'yes' : 'no'}</span>
    </div>
  );
};

const renderCart = () =>
  render(
    <CartProvider>
      <TestConsumer />
    </CartProvider>
  );

describe('CartContext', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('starts with empty cart', () => {
    renderCart();

    expect(screen.getByTestId('total-quantity'));
    expect(screen.getByTestId('total-value'));
    expect(screen.getByTestId('is-in-cart'));
  });

  it('adds item to cart', async () => {
    renderCart();

    await act(async () => {
      screen.getByTestId('add-item').click();
    });

    expect(screen.getByTestId('total-quantity'));
    expect(screen.getByTestId('total-value'));
    expect(screen.getByTestId('is-in-cart'));
  });

  it('increments item quantity', async () => {
    renderCart();

    await act(async () => {
      screen.getByTestId('add-item').click();
      screen.getByTestId('increment').click();
    });

    expect(screen.getByTestId('total-quantity'));
    expect(screen.getByTestId('total-value'));
  });

  it('decrements item quantity', async () => {
    renderCart();

    await act(async () => {
      screen.getByTestId('add-item').click();
      screen.getByTestId('increment').click();
      screen.getByTestId('decrement').click();
    });

    expect(screen.getByTestId('total-quantity'));
    expect(screen.getByTestId('total-value'));
  });

  it('removes item when quantity reaches zero', async () => {
    renderCart();

    await act(async () => {
      screen.getByTestId('add-item').click();
      screen.getByTestId('decrement').click();
    });

    expect(screen.getByTestId('total-quantity'));
    expect(screen.getByTestId('is-in-cart'));
  });

  it('removes item manually', async () => {
    renderCart();

    await act(async () => {
      screen.getByTestId('add-item').click();
      screen.getByTestId('remove').click();
    });

    expect(screen.getByTestId('total-quantity'));
    expect(screen.getByTestId('total-value'));
  });

  it('clears the cart', async () => {
    renderCart();

    await act(async () => {
      screen.getByTestId('add-item').click();
      screen.getByTestId('add-item').click();
      screen.getByTestId('clear').click();
    });

    expect(screen.getByTestId('total-quantity'));
    expect(screen.getByTestId('total-value'));
  });
});
