import { SxProps, Theme } from '@mui/material';

export const overlay = (coords: DOMRect | null): SxProps<Theme> => ({
  position: 'fixed',
  inset: 0,
  background: 'rgba(0,0,0,0.75)',
  zIndex: 2000,
  clipPath: coords
    ? `polygon(
        0 0,
        100% 0,
        100% 100%,
        0 100%,
        0 0,
        ${coords.left - 12}px ${coords.top - 12}px,
        ${coords.left - 12}px ${coords.bottom + 12}px,
        ${coords.right + 12}px ${coords.bottom + 12}px,
        ${coords.right + 12}px ${coords.top - 12}px,
        ${coords.left - 12}px ${coords.top - 12}px
      )`
    : 'none',
});

export const highlight = (coords: DOMRect, primary: string): SxProps<Theme> => ({
  position: 'absolute',
  top: coords.top - 12,
  left: coords.left - 12,
  width: coords.width + 24,
  height: coords.height + 24,
  borderRadius: 2,
  border: `2px solid ${primary}`,
  boxShadow: `0 0 18px ${primary}`,
  animation: 'pulse 2s infinite',
  pointerEvents: 'none',
});

export const hintBox = (coords: DOMRect, secondary: string): SxProps<Theme> => ({
  position: 'absolute',
  top: coords.bottom + 12,
  left: coords.left - 300,
  bgcolor: 'background.paper',
  borderRadius: 2,
  p: 2,
  width: 260,
  boxShadow: 6,
  border: `1px solid ${secondary}`,
});

export const title = (primary: string): SxProps<Theme> => ({
  color: primary,
  mb: 1,
});

export const text: SxProps<Theme> = {
  mb: 2,
};

export const button = (primary: string, secondary: string): SxProps<Theme> => ({
  bgcolor: primary,
  color: '#fff',
  ':hover': {
    bgcolor: secondary,
  },
});
