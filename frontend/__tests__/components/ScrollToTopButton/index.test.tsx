import { describe, it, expect, vi, beforeEach, type MockedFunction } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { ScrollToTopButton } from '../../../src/components/ScrollToTopButton';
import { ThemeProvider, createTheme } from '@mui/material';
import useScrollTrigger from '@mui/material/useScrollTrigger';

vi.mock('@mui/material/useScrollTrigger', () => ({
  default: vi.fn(),
}));

vi.mock('@mui/material/Zoom', () => ({
  default: ({ children }: { children: React.ReactNode }) => <>{children}</>,
}));

const renderWithTheme = (ui: React.ReactNode) => {
  const theme = createTheme();
  return render(<ThemeProvider theme={theme}>{ui}</ThemeProvider>);
};

describe('ScrollToTopButton', () => {
  const mockUseScrollTrigger = useScrollTrigger as MockedFunction<typeof useScrollTrigger>;

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('should not render button when trigger is false', () => {
    mockUseScrollTrigger.mockReturnValue(false);

    renderWithTheme(<ScrollToTopButton />);

    expect(screen.queryByRole('button')).toBeNull();
  });

  it('should render button when trigger is true', () => {
    renderWithTheme(<ScrollToTopButton />);

    expect(screen.getByRole('button', { hidden: true })).toBeTruthy();
  });

  it('should scroll to top when button is clicked', () => {
    const scrollToSpy = vi.spyOn(window, 'scrollTo').mockImplementation(() => {});

    renderWithTheme(<ScrollToTopButton />);

    fireEvent.click(screen.getByRole('button', { hidden: true }));

    expect(scrollToSpy).toHaveBeenCalledWith({
      top: 0,
      behavior: 'smooth',
    });
  });
});
