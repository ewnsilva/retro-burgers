import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import type { TFunction } from 'i18next';

import { MenuHint } from '../../../src/components/MenuHint';
import * as themeContext from '../../../src/utils/context';
import { useLanguage } from '../../../src/utils/hooks/useLanguage';

vi.mock('../../../src/utils/hooks/useLanguage', () => ({
  useLanguage: vi.fn(),
}));

vi.mock('../../../src/utils/context', () => ({
  useTheme: vi.fn(),
}));

const mockBoundingClientRect = (): DOMRect =>
  ({
    x: 100,
    y: 100,
    width: 40,
    height: 40,
    top: 100,
    left: 100,
    right: 140,
    bottom: 140,
  }) as DOMRect;

describe('MenuHint component', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    localStorage.clear();

    vi.mocked(useLanguage).mockReturnValue({
      t: ((key: string) => key) as unknown as TFunction<'translation'>,
      language: 'pt',
      changeLanguage: vi.fn(),
    });

    vi.mocked(themeContext.useTheme).mockReturnValue({
      currentColors: {
        primary: '#ff0000',
        secondary: '#00ff00',
      },
    } as any);

    const menuButton = document.createElement('button');
    menuButton.id = 'menu-icon-button';
    menuButton.getBoundingClientRect = vi.fn(mockBoundingClientRect);
    document.body.appendChild(menuButton);
  });

  it('renders the MenuHint even when it hasnt been displayed yet.', async () => {
    render(<MenuHint />);

    expect(await screen.findByText('menuHint.title')).toBeTruthy();
    expect(screen.getByText('menuHint.button')).toBeTruthy();
  });

  it('it will not render if menuHintShown is already in localStorage.', () => {
    localStorage.setItem('menuHintShown', 'true');

    const { container } = render(<MenuHint />);

    expect(container.firstChild).toBeNull();
  });

  it('closes when the button is clicked.', async () => {
    render(<MenuHint />);

    const button = await screen.findByText('menuHint.button');
    fireEvent.click(button);

    expect(screen.queryByText('menuHint.title')).toBeNull();
  });

  it('closes when you click on the overlay.', async () => {
    render(<MenuHint />);

    const title = await screen.findByText('menuHint.title');

    fireEvent.click(title.closest('div')!);

    expect(screen.queryByText('menuHint.title')).toBeNull();
  });
});
