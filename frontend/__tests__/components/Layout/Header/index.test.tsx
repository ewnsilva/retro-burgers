import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';

import { Header } from '../../../../src/components/Layout/Header';

import { useHeaderLogic } from '../../../../src/components/Layout/Header/Header.logic';
import { useLanguage } from '../../../../src/utils/hooks/useLanguage';

vi.mock('../../../../src/components/Layout/Header/Header.logic', () => ({
  useHeaderLogic: vi.fn(),
}));

vi.mock('../../../../src/utils/hooks/useLanguage', () => ({
  useLanguage: vi.fn(),
}));

vi.mock('../../../../src/components/Layout/HeaderMenu', () => ({
  HeaderMenu: ({ open }: { open: boolean }) => (
    <div data-testid="header-menu">{open && <span>menu-open</span>}</div>
  ),
}));

vi.mock('../../../../src/components/InfoModal', () => ({
  InfoModal: ({ open }: { open: boolean }) =>
    open ? <div data-testid="info-modal">info-modal</div> : null,
}));

describe('Header component', () => {
  const setSearchMock = vi.fn();
  const handleSearchChangeMock = vi.fn();
  const handleMenuClickMock = vi.fn();
  const handleCloseMenuMock = vi.fn();
  const handleThemeChangeMock = vi.fn();
  const toggleMusicMock = vi.fn();
  const setShowInfoMock = vi.fn();

  beforeEach(() => {
    vi.clearAllMocks();

    vi.mocked(useLanguage).mockReturnValue({
      t: (key: string) => key,
      language: 'pt',
    } as any);

    vi.mocked(useHeaderLogic).mockReturnValue({
      themeType: 'light',
      allThemeColors: { light: {}, dark: {} },
      anchorEl: null,
      showInfo: false,
      musicOn: false,
      handleMenuClick: handleMenuClickMock,
      handleCloseMenu: handleCloseMenuMock,
      handleSearchChange: handleSearchChangeMock,
      handleThemeChange: handleThemeChangeMock,
      toggleMusic: toggleMusicMock,
      setShowInfo: setShowInfoMock,
    } as any);
  });

  it('renders header with logo and search field', () => {
    render(<Header setSearch={setSearchMock} />);

    expect(screen.getByText('Retro-Burgers')).toBeTruthy();
    expect(screen.getByLabelText('header.search')).toBeTruthy();
  });

  it('calls handleSearchChange when typing in search input', () => {
    render(<Header setSearch={setSearchMock} />);

    const input = screen.getByLabelText('header.search');

    fireEvent.change(input, { target: { value: 'burger' } });

    expect(handleSearchChangeMock).toHaveBeenCalled();
  });

  it('calls handleMenuClick when menu button is clicked', () => {
    render(<Header setSearch={setSearchMock} />);

    const button = screen.getByRole('button');

    fireEvent.click(button);

    expect(handleMenuClickMock).toHaveBeenCalled();
  });

  it('renders HeaderMenu component', () => {
    render(<Header setSearch={setSearchMock} />);

    expect(screen.getByTestId('header-menu')).toBeTruthy();
  });

  it('renders InfoModal when showInfo is true', () => {
    vi.mocked(useHeaderLogic).mockReturnValueOnce({
      themeType: 'light',
      allThemeColors: { light: {}, dark: {} },
      anchorEl: null,
      showInfo: true,
      musicOn: false,
      handleMenuClick: handleMenuClickMock,
      handleCloseMenu: handleCloseMenuMock,
      handleSearchChange: handleSearchChangeMock,
      handleThemeChange: handleThemeChangeMock,
      toggleMusic: toggleMusicMock,
      setShowInfo: setShowInfoMock,
    } as any);

    render(<Header setSearch={setSearchMock} />);

    expect(screen.getByTestId('info-modal')).toBeTruthy();
  });
});
