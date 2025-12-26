import { describe, it, expect, vi, beforeEach } from 'vitest';
import { renderHook, act } from '@testing-library/react';

const changeLanguageMock = vi.fn();

vi.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (key: string) => key,
    i18n: {
      language: 'pt',
      changeLanguage: changeLanguageMock,
    },
  }),
}));

describe('useLanguage hook', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    localStorage.clear();
  });

  it('should return t function and current language', async () => {
    const { useLanguage } = await import('../../../src/utils/hooks/useLanguage');

    const { result } = renderHook(() => useLanguage());

    expect(result.current.language).toBe('pt');
    expect(typeof result.current.t).toBe('function');
    expect(result.current.t('hello')).toBe('hello');
  });

  it('should change language and persist it in localStorage', async () => {
    const { useLanguage } = await import('../../../src/utils/hooks/useLanguage');

    const { result } = renderHook(() => useLanguage());

    act(() => {
      result.current.changeLanguage('en');
    });

    expect(changeLanguageMock).toHaveBeenCalledWith('en');
    expect(localStorage.getItem('retroburguers-language')).toBe('en');
  });
});
