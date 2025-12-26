import { describe, it, expect, vi, beforeEach } from 'vitest';
import type { AxiosInstance } from 'axios';

const responseUseMock = vi.fn();

const axiosInstanceMock = {
  interceptors: {
    response: {
      use: responseUseMock,
    },
  },
} as unknown as AxiosInstance;

vi.mock('axios', () => ({
  default: {
    create: vi.fn(() => axiosInstanceMock),
  },
}));

describe('useAxios hook', () => {
  beforeEach(() => {
    vi.resetModules();
    vi.clearAllMocks();
  });

  it('should return axios instance', async () => {
    const { useAxios } = await import('../../../src/utils/hooks/useAxios');

    const { api } = useAxios();

    expect(api).toBe(axiosInstanceMock);
  });

  it('should show alert when response error status is 404', async () => {
    const alertSpy = vi.spyOn(window, 'alert').mockImplementation(() => {});

    await import('../../../src/utils/hooks/useAxios');

    // Agora o interceptor EXISTE
    expect(responseUseMock).toHaveBeenCalledOnce();

    const [, onRejected] = responseUseMock.mock.calls[0];

    const error = {
      response: { status: 404 },
    };

    await expect(onRejected(error)).rejects.toBe(error);

    expect(alertSpy).toHaveBeenCalledWith('Não encontrado.');

    alertSpy.mockRestore();
  });

  it('should NOT show alert for non-404 errors', async () => {
    const alertSpy = vi.spyOn(window, 'alert').mockImplementation(() => {});

    await import('../../../src/utils/hooks/useAxios');

    const [, onRejected] = responseUseMock.mock.calls[0];

    const error = {
      response: { status: 500 },
    };

    await expect(onRejected(error)).rejects.toBe(error);

    expect(alertSpy).not.toHaveBeenCalled();

    alertSpy.mockRestore();
  });
});
