import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import type { TFunction } from 'i18next';

import { Navigation } from '../../../../src/components/Layout/Navigation';
import { useLanguage } from '../../../../src/utils/hooks/useLanguage';

vi.mock('../../../../src/utils/hooks/useLanguage', () => ({
  useLanguage: vi.fn(),
}));

describe('Navigation component', () => {
  const setCategoryMock = vi.fn();

  beforeEach(() => {
    vi.clearAllMocks();

    vi.mocked(useLanguage).mockReturnValue({
      t: ((key: string) => key) as unknown as TFunction<'translation'>,
      language: 'pt',
      changeLanguage: vi.fn(),
    });
  });

  it('renders all navigation options', () => {
    render(<Navigation category={0} setCategory={setCategoryMock} />);

    expect(screen.getByText('navigation.burgers')).toBeTruthy();
    expect(screen.getByText('navigation.snacks')).toBeTruthy();
    expect(screen.getByText('navigation.desserts')).toBeTruthy();
    expect(screen.getByText('navigation.drinks')).toBeTruthy();
  });

  it('the `setCategory(0)` function is called when Burgers is clicked.', () => {
    render(<Navigation category={1} setCategory={setCategoryMock} />);

    fireEvent.click(screen.getByText('navigation.burgers'));

    expect(setCategoryMock).toHaveBeenCalledWith(0);
  });

  it('calls setCategory(1) when Snacks is clicked.', () => {
    render(<Navigation category={0} setCategory={setCategoryMock} />);

    fireEvent.click(screen.getByText('navigation.snacks'));

    expect(setCategoryMock).toHaveBeenCalledWith(1);
  });

  it('call setCategory(2) when clicking on Desserts', () => {
    render(<Navigation category={0} setCategory={setCategoryMock} />);

    fireEvent.click(screen.getByText('navigation.desserts'));

    expect(setCategoryMock).toHaveBeenCalledWith(2);
  });

  it('call setCategory(3) when clicking on Drinks', () => {
    render(<Navigation category={0} setCategory={setCategoryMock} />);

    fireEvent.click(screen.getByText('navigation.drinks'));

    expect(setCategoryMock).toHaveBeenCalledWith(3);
  });
});
