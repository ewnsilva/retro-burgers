import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';

import { WelcomeModal } from '../../../src/components/WelcomeModal';

import { useLanguage } from '../../../src/utils/hooks/useLanguage';
import { useTheme } from '../../../src/utils/context/Theme';

vi.mock('../../../src/utils/hooks/useLanguage', () => ({
  useLanguage: vi.fn(),
}));

vi.mock('../../../src/utils/context/Theme', () => ({
  useTheme: vi.fn(),
}));

describe('WelcomeModal component', () => {
  const onFinishMock = vi.fn();

  beforeEach(() => {
    vi.clearAllMocks();
    localStorage.clear();

    vi.mocked(useLanguage).mockReturnValue({
      t: (key: string) => key,
      language: 'pt',
      changeLanguage: vi.fn(),
    } as any);

    vi.mocked(useTheme).mockReturnValue({
      currentColors: {
        primary: '#ff0000',
        secondary: '#00ff00',
      },
    } as any);
  });

  it('renders the modal on first visit', async () => {
    render(<WelcomeModal onFinish={onFinishMock} />);

    await waitFor(() => {
      expect(screen.getByText('welcome.title')).toBeTruthy();
      expect(screen.getByText('welcome.subtitle')).toBeTruthy();
      expect(screen.getByText('welcome.cta')).toBeTruthy();
    });
  });

  it('stores visit flag in localStorage on first render', async () => {
    render(<WelcomeModal onFinish={onFinishMock} />);

    await waitFor(() => {
      expect(localStorage.getItem('hasVisitedMenuApp')).toBe('true');
    });
  });

  it('calls onFinish and closes modal when CTA button is clicked', async () => {
    render(<WelcomeModal onFinish={onFinishMock} />);

    const button = await screen.findByText('welcome.cta');

    fireEvent.click(button);

    expect(onFinishMock).toHaveBeenCalled();
  });

  it('does not render the modal if user has already visited', async () => {
    localStorage.setItem('hasVisitedMenuApp', 'true');

    render(<WelcomeModal onFinish={onFinishMock} />);

    await waitFor(() => {
      expect(screen.queryByText('welcome.title')).toBeNull();
    });
  });
});
