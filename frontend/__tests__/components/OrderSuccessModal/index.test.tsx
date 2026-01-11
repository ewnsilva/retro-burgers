import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import type { TFunction } from 'i18next';

import { OrderSuccessModal } from '../../../src/components/OrderSuccessModal';
import { useLanguage } from '../../../src/utils/hooks/useLanguage';

vi.mock('../../../src/utils/hooks/useLanguage', () => ({
  useLanguage: vi.fn(),
}));

describe('OrderSuccessModal component', () => {
  const onCloseMock = vi.fn();

  beforeEach(() => {
    vi.clearAllMocks();

    vi.mocked(useLanguage).mockReturnValue({
      t: ((key: string) => key) as unknown as TFunction<'translation'>,
      language: 'pt',
      changeLanguage: vi.fn(),
    });
  });

  it('renders the modal when open is true', () => {
    render(<OrderSuccessModal open={true} onClose={onCloseMock} />);

    expect(screen.getByText('orderSuccess.title')).toBeTruthy();
    expect(screen.getByText(content => content.includes('orderSuccess.message'))).toBeTruthy();
    expect(screen.getByText('orderSuccess.close')).toBeTruthy();
  });

  it('does not render the modal when open is false', () => {
    const { container } = render(<OrderSuccessModal open={false} onClose={onCloseMock} />);

    expect(container.firstChild).toBeNull();
  });

  it('calls onClose when close button is clicked', () => {
    render(<OrderSuccessModal open={true} onClose={onCloseMock} />);

    fireEvent.click(screen.getByText('orderSuccess.close'));

    expect(onCloseMock).toHaveBeenCalledTimes(1);
  });

  it('calls onClose when close button is clicked', () => {
    render(<OrderSuccessModal open={true} onClose={onCloseMock} />);

    fireEvent.click(screen.getByText('orderSuccess.close'));

    expect(onCloseMock).toHaveBeenCalled();
  });
});
