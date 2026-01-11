import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import { act } from 'react';

import { ThemeProvider, useTheme } from '../../../../src/utils/context/Theme';

const localStorageMock = (() => {
  let store: Record<string, string> = {};

  return {
    getItem: vi.fn((key: string) => store[key] ?? null),
    setItem: vi.fn((key: string, value: string) => {
      store[key] = value;
    }),
    clear: vi.fn(() => {
      store = {};
    }),
  };
})();

Object.defineProperty(window, 'localStorage', {
  value: localStorageMock,
});

const TestConsumer = () => {
  const { themeType, setThemeType, currentColors, allThemeColors } = useTheme();

  return (
    <div>
      <span data-testid="theme-type">{themeType}</span>
      <span data-testid="primary-color">{currentColors.primary}</span>
      <span data-testid="has-all-themes">{Object.keys(allThemeColors).length}</span>

      <button data-testid="set-retrowave" onClick={() => setThemeType('retrowave')} />

      <button data-testid="set-darkwave" onClick={() => setThemeType('darkwave')} />
    </div>
  );
};

describe('ThemeProvider / useTheme', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    localStorage.clear();
  });

  it('throws error when useTheme is used outside ThemeProvider', () => {
    const BrokenComponent = () => {
      useTheme();
      return null;
    };

    expect(() => render(<BrokenComponent />)).toThrow(
      'useTheme deve ser usado dentro de ThemeProvider'
    );
  });

  it('uses synthwave as default theme when no localStorage value exists', () => {
    render(
      <ThemeProvider>
        <TestConsumer />
      </ThemeProvider>
    );

    expect(screen.getByTestId('theme-type').textContent).toBe('synthwave');
  });

  it('loads theme from localStorage when available', () => {
    localStorage.setItem('retroburguers-theme', 'retrowave');

    render(
      <ThemeProvider>
        <TestConsumer />
      </ThemeProvider>
    );

    expect(screen.getByTestId('theme-type').textContent).toBe('retrowave');
  });

  it('changes theme when setThemeType is called', () => {
    render(
      <ThemeProvider>
        <TestConsumer />
      </ThemeProvider>
    );

    act(() => {
      screen.getByTestId('set-darkwave').click();
    });

    expect(screen.getByTestId('theme-type').textContent).toBe('darkwave');
  });

  it('persists theme changes to localStorage', () => {
    render(
      <ThemeProvider>
        <TestConsumer />
      </ThemeProvider>
    );

    act(() => {
      screen.getByTestId('set-retrowave').click();
    });

    expect(localStorage.setItem).toHaveBeenCalledWith('retroburguers-theme', 'retrowave');
  });

  it('exposes currentColors and allThemeColors correctly', () => {
    render(
      <ThemeProvider>
        <TestConsumer />
      </ThemeProvider>
    );

    expect(screen.getByTestId('primary-color').textContent).toBeTruthy();
    expect(screen.getByTestId('has-all-themes').textContent).toBe('3');
  });
});
