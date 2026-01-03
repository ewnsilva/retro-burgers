import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import type { TFunction } from 'i18next';

import { Footer } from '../../../../src/components/Layout/Footer';
import { useLanguage } from '../../../../src/utils/hooks/useLanguage';

vi.mock('../../../../src/utils/hooks/useLanguage', () => ({
  useLanguage: vi.fn(),
}));

describe('Footer component', () => {
  beforeEach(() => {
    vi.clearAllMocks();

    vi.mocked(useLanguage).mockReturnValue({
      t: ((key: string) => key) as unknown as TFunction<'translation'>,
      language: 'pt',
      changeLanguage: vi.fn(),
    });
  });

  it('renders the footer text correctly.', () => {
    render(<Footer />);

    expect(screen.getByText('footer.copyright')).toBeTruthy();
  });

  it('renders the footer as a <footer> element.', () => {
    const { container } = render(<Footer />);

    const footer = container.querySelector('footer');
    expect(footer).toBeTruthy();
  });
});
