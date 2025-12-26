import { describe, it, expect, vi, beforeEach } from 'vitest';
import { renderHook } from '@testing-library/react';
import { useThemeMusic } from '../../../../src/utils/hooks/musics';

const playMock = vi.fn();
const stopMock = vi.fn();
const unloadMock = vi.fn();

vi.mock('howler', () => {
  return {
    Howl: vi.fn().mockImplementation(function () {
      return {
        play: playMock,
        stop: stopMock,
        unload: unloadMock,
      };
    }),
  };
});

describe('useThemeMusic hook', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('does not create or play music when musicEnabled is false', () => {
    renderHook(() =>
      useThemeMusic({
        themeType: 'synthwave',
        musicEnabled: false,
      })
    );

    expect(playMock).not.toHaveBeenCalled();
  });

  it('creates and plays music when musicEnabled is true', () => {
    renderHook(() =>
      useThemeMusic({
        themeType: 'synthwave',
        musicEnabled: true,
      })
    );

    expect(playMock).toHaveBeenCalledTimes(1);
  });

  it('stops and unloads previous music when theme changes', () => {
    const { rerender } = renderHook(
      ({ themeType, musicEnabled }) => useThemeMusic({ themeType, musicEnabled }),
      {
        initialProps: {
          themeType: 'synthwave' as const,
          musicEnabled: true,
        },
      }
    );

    rerender({
      themeType: 'retrowave' as const,
      musicEnabled: true,
    });

    expect(stopMock).toHaveBeenCalled();
    expect(unloadMock).toHaveBeenCalled();
    expect(playMock).toHaveBeenCalledTimes(2);
  });

  it('stops and unloads music when musicEnabled becomes false', () => {
    const { rerender } = renderHook(
      ({ musicEnabled }) =>
        useThemeMusic({
          themeType: 'darkwave',
          musicEnabled,
        }),
      {
        initialProps: { musicEnabled: true },
      }
    );

    rerender({ musicEnabled: false });

    expect(stopMock).toHaveBeenCalled();
    expect(unloadMock).toHaveBeenCalled();
  });

  it('cleans up music on unmount', () => {
    const { unmount } = renderHook(() =>
      useThemeMusic({
        themeType: 'synthwave',
        musicEnabled: true,
      })
    );

    unmount();

    expect(stopMock).toHaveBeenCalled();
    expect(unloadMock).toHaveBeenCalled();
  });
});
