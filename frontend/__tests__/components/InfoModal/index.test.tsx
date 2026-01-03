import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import type { TFunction } from 'i18next';

import { InfoModal } from '../../../src/components/InfoModal';

vi.mock('../../../src/utils/hooks/useLanguage', () => ({
  useLanguage: vi.fn(),
}));

vi.mock('@mui/material', async () => {
  const actual = await vi.importActual<typeof import('@mui/material')>('@mui/material');

  return {
    ...actual,
    Modal: ({ open, onClose, children }: any) =>
      open ? (
        <div data-testid="modal" onClick={onClose}>
          {children}
        </div>
      ) : null,
  };
});

describe('InfoModal component', () => {
  const onCloseMock = vi.fn();

  beforeEach(async () => {
    vi.clearAllMocks();

    const hooks = await import('../../../src/utils/hooks/useLanguage');

    vi.mocked(hooks.useLanguage).mockReturnValue({
      t: ((key: string) => key) as unknown as TFunction<'translation'>,
      language: 'pt',
      changeLanguage: vi.fn(),
    });
  });

  it('the modal is not rendered when open = false.', () => {
    render(<InfoModal open={false} onClose={onCloseMock} />);

    expect(screen.queryByTestId('modal')).toBeNull();
  });

  it('renders the modal when open = true.', () => {
    render(<InfoModal open onClose={onCloseMock} />);

    expect(screen.getByTestId('modal')).toBeTruthy();
  });

  it('displays the translated texts correctly.', () => {
    render(<InfoModal open onClose={onCloseMock} />);

    expect(screen.getByText('infoModal.description')).toBeTruthy();
    expect(screen.getByText('infoModal.text')).toBeTruthy();
  });

  it('the `onClose` event is called when the modal is closed.', () => {
    render(<InfoModal open onClose={onCloseMock} />);

    fireEvent.click(screen.getByTestId('modal'));

    expect(onCloseMock).toHaveBeenCalled();
  });
});
