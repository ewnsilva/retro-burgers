import { SxProps, Theme } from '@mui/material';

export const iconTitle: SxProps<Theme> = {
  backgroundColor: 'primary.main',
  p: 1.5,
  borderRadius: 2,
  width: '2em',
  height: '2em',
};

export const drawerContainer: SxProps<Theme> = {
  display: 'flex',
  flexDirection: 'column',
  width: { xs: '100vw', sm: 375 },
  height: '100vh',
  backgroundColor: 'info.main',
};

export const incrementQuantityStyle: SxProps<Theme> = {
  py: { xs: 1, sm: 0 },
  px: { xs: 1.5, sm: 1 },
  minWidth: 36,
  backgroundColor: 'secondary.main',
  textAlign: 'center',
  borderRadius: 1,
  border: '1px solid transparent',
  borderColor: 'background.default',
  cursor: 'pointer',
};

export const productDescription: SxProps<Theme> = {
  fontSize: { xs: '0.7rem', sm: '0.75rem' },
  my: 1.5,
};

export const backgroundProduct: SxProps<Theme> = {
  mb: 1,
  backgroundColor: 'info.main',
  border: '1.2px solid',
  borderColor: 'background.default',
};

export const quantityIcons: SxProps<Theme> = {
  width: 15,
  color: 'background.default',
};

export const footerContainer: SxProps<Theme> = {
  display: 'flex',
  flexDirection: 'column',
  alignSelf: 'center',
  width: '90%',
  py: 2,
  borderTop: '1px solid',
};
