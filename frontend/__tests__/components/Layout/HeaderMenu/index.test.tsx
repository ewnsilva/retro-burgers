import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import type { TFunction } from 'i18next';

import { HeaderMenu } from '../../../../src/components/Layout/HeaderMenu';
import { useLanguage } from '../../../../src/utils/hooks/useLanguage';

vi.mock('../../../../src/utils/hooks/useLanguage', () => ({
  useLanguage: vi.fn(),
}));

const allThemeColors = {
  light: { primary: '#fff', secondary: '#000' },
  dark: { primary: '#000', secondary: '#fff' },
};

const anchorEl = document.createElement('div');

describe('HeaderMenu component', () => {
  const onClose = vi.fn();
  const onOpenInfo = vi.fn();
  const onThemeChange = vi.fn();
  const toggleMusic = vi.fn();
  const changeLanguage = vi.fn();

  beforeEach(() => {
    vi.clearAllMocks();

    vi.mocked(useLanguage).mockReturnValue({
      t: ((key: string) => key) as unknown as TFunction<'translation'>,
      language: 'pt',
      changeLanguage,
    });
  });

  it('render available themes', () => {
    render(
      <HeaderMenu
        allThemeColors={allThemeColors}
        anchorEl={anchorEl}
        open
        musicOn
        themeType="light"
        onClose={onClose}
        onOpenInfo={onOpenInfo}
        onThemeChange={onThemeChange}
        toggleMusic={toggleMusic}
      />
    );

    expect(screen.getByText('light')).toBeTruthy();
    expect(screen.getByText('dark')).toBeTruthy();
  });

  it('this triggers onThemeChange when a theme is clicked.', () => {
    render(
      <HeaderMenu
        allThemeColors={allThemeColors}
        anchorEl={anchorEl}
        open
        musicOn
        themeType="light"
        onClose={onClose}
        onOpenInfo={onOpenInfo}
        onThemeChange={onThemeChange}
        toggleMusic={toggleMusic}
      />
    );

    fireEvent.click(screen.getByText('dark'));

    expect(onThemeChange).toHaveBeenCalledWith('dark');
  });

  it('toggleMusic is called when the music item is clicked.', () => {
    render(
      <HeaderMenu
        allThemeColors={allThemeColors}
        anchorEl={anchorEl}
        open
        musicOn
        themeType="light"
        onClose={onClose}
        onOpenInfo={onOpenInfo}
        onThemeChange={onThemeChange}
        toggleMusic={toggleMusic}
      />
    );

    fireEvent.click(screen.getByText('headerMenu.musicOn'));

    expect(toggleMusic).toHaveBeenCalled();
  });

  it('to switch languages, click on the language menu.', () => {
    render(
      <HeaderMenu
        allThemeColors={allThemeColors}
        anchorEl={anchorEl}
        open
        musicOn
        themeType="light"
        onClose={onClose}
        onOpenInfo={onOpenInfo}
        onThemeChange={onThemeChange}
        toggleMusic={toggleMusic}
      />
    );

    fireEvent.click(screen.getByText('Português 🇧🇷'));

    expect(changeLanguage).toHaveBeenCalledWith('en');
  });

  it('the onClose and onOpenInfo events are triggered when you click on More information.', () => {
    render(
      <HeaderMenu
        allThemeColors={allThemeColors}
        anchorEl={anchorEl}
        open
        musicOn
        themeType="light"
        onClose={onClose}
        onOpenInfo={onOpenInfo}
        onThemeChange={onThemeChange}
        toggleMusic={toggleMusic}
      />
    );

    fireEvent.click(screen.getByText('headerMenu.moreInfo'));

    expect(onClose).toHaveBeenCalled();
    expect(onOpenInfo).toHaveBeenCalled();
  });
});
