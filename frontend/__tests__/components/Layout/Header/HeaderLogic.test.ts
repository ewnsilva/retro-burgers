import { describe, it, expect, vi, beforeEach } from 'vitest';
import { renderHook, act } from '@testing-library/react';

import { useHeaderLogic } from '../../../../src/components/Layout/Header/Header.logic';

import { useTheme } from '../../../../src/utils/context/Theme';
import { useThemeMusic } from '../../../../src/utils/hooks/musics';

vi.mock('../../../../src/utils/context/Theme', () => ({
  useTheme: vi.fn(),
}));

vi.mock('../../../../src/utils/hooks/musics', () => ({
  useThemeMusic: vi.fn(),
}));

describe('useHeaderLogic hook', () => {
  const setSearchMock = vi.fn();
  const setThemeTypeMock = vi.fn();

  beforeEach(() => {
    vi.clearAllMocks();

    vi.mocked(useTheme).mockReturnValue({
      themeType: 'light',
      setThemeType: setThemeTypeMock,
      allThemeColors: {
        light: {},
        dark: {},
      },
    } as any);
  });

  it('should initialize with default values', () => {
    const { result } = renderHook(() => useHeaderLogic(setSearchMock));

    expect(result.current.anchorEl).toBeNull();
    expect(result.current.showInfo).toBe(false);
    expect(result.current.musicOn).toBe(false);
    expect(result.current.themeType).toBe('light');
  });

  it('should set anchorEl when handleMenuClick is called', () => {
    const { result } = renderHook(() => useHeaderLogic(setSearchMock));

    const button = document.createElement('button');

    act(() => {
      result.current.handleMenuClick({
        currentTarget: button,
      } as any);
    });

    expect(result.current.anchorEl).toBe(button);
  });

  it('should clear anchorEl when handleCloseMenu is called', () => {
    const { result } = renderHook(() => useHeaderLogic(setSearchMock));

    const button = document.createElement('button');

    act(() => {
      result.current.handleMenuClick({ currentTarget: button } as any);
      result.current.handleCloseMenu();
    });

    expect(result.current.anchorEl).toBeNull();
  });

  it('should call setSearch when handleSearchChange is triggered', () => {
    const { result } = renderHook(() => useHeaderLogic(setSearchMock));

    act(() => {
      result.current.handleSearchChange({
        target: { value: 'pizza' },
      } as any);
    });

    expect(setSearchMock).toHaveBeenCalledWith('pizza');
  });

  it('should change theme and close menu when handleThemeChange is called', () => {
    const { result } = renderHook(() => useHeaderLogic(setSearchMock));

    const button = document.createElement('button');

    act(() => {
      result.current.handleMenuClick({ currentTarget: button } as any);
      result.current.handleThemeChange('dark' as any);
    });

    expect(setThemeTypeMock).toHaveBeenCalledWith('dark');
    expect(result.current.anchorEl).toBeNull();
  });

  it('should toggle musicOn state when toggleMusic is called', () => {
    const { result } = renderHook(() => useHeaderLogic(setSearchMock));

    act(() => {
      result.current.toggleMusic();
    });

    expect(result.current.musicOn).toBe(true);

    act(() => {
      result.current.toggleMusic();
    });

    expect(result.current.musicOn).toBe(false);
  });

  it('should call useThemeMusic with correct parameters', () => {
    renderHook(() => useHeaderLogic(setSearchMock));

    expect(useThemeMusic).toHaveBeenCalledWith({
      themeType: 'light',
      musicEnabled: false,
    });
  });

  it('should allow updating showInfo state', () => {
    const { result } = renderHook(() => useHeaderLogic(setSearchMock));

    act(() => {
      result.current.setShowInfo(true);
    });

    expect(result.current.showInfo).toBe(true);
  });
});
