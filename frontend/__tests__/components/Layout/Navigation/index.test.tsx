import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import type { TFunction } from 'i18next';

import { Navigation } from '../../../../src/components/Layout/Navigation';
import { useLanguage } from '../../../../src/utils/hooks/useLanguage';
import { ICategory } from '../../../../src/utils/interfaces';

vi.mock('../../../../src/utils/hooks/useLanguage', () => ({
  useLanguage: vi.fn(),
}));

describe('Navigation component', () => {
  const setCategoryMock = vi.fn();

  const mockCategories: ICategory[] = [
    {
      id: 1,
      title: { pt: 'Hambúrgueres', en: 'Burgers' },
    },
    {
      id: 2,
      title: { pt: 'Porções', en: 'Snacks' },
    },
    {
      id: 3,
      title: { pt: 'Sobremesas', en: 'Desserts' },
    },
    {
      id: 4,
      title: { pt: 'Bebidas', en: 'Drinks' },
    },
  ];

  beforeEach(() => {
    vi.clearAllMocks();

    vi.mocked(useLanguage).mockReturnValue({
      t: ((key: string) => key) as unknown as TFunction<'translation'>,
      language: 'pt',
      changeLanguage: vi.fn(),
    });
  });

  it('renders all navigation options', () => {
    render(<Navigation category={1} setCategory={setCategoryMock} categories={mockCategories} />);

    expect(screen.getByText('Hambúrgueres')).toBeTruthy();
    expect(screen.getByText('Porções')).toBeTruthy();
    expect(screen.getByText('Sobremesas')).toBeTruthy();
    expect(screen.getByText('Bebidas')).toBeTruthy();
  });

  it('calls setCategory(1) when Hambúrgueres is clicked', () => {
    render(<Navigation category={1} setCategory={setCategoryMock} categories={mockCategories} />);

    fireEvent.click(screen.getByText('Hambúrgueres'));

    expect(setCategoryMock).toHaveBeenCalledWith(1);
  });

  it('calls setCategory(2) when Porções is clicked', () => {
    render(<Navigation category={2} setCategory={setCategoryMock} categories={mockCategories} />);

    fireEvent.click(screen.getByText('Porções'));

    expect(setCategoryMock).toHaveBeenCalledWith(2);
  });

  it('calls setCategory(3) when Sobremesas is clicked', () => {
    render(<Navigation category={3} setCategory={setCategoryMock} categories={mockCategories} />);

    fireEvent.click(screen.getByText('Sobremesas'));

    expect(setCategoryMock).toHaveBeenCalledWith(3);
  });

  it('calls setCategory(4) when Bebidas is clicked', () => {
    render(<Navigation category={4} setCategory={setCategoryMock} categories={mockCategories} />);

    fireEvent.click(screen.getByText('Bebidas'));

    expect(setCategoryMock).toHaveBeenCalledWith(4);
  });
});
