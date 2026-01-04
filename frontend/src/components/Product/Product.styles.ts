import { SxProps, Theme } from '@mui/material';

export const card: SxProps<Theme> = {
  backgroundColor: 'transparent',
  border: '2px solid white',
  borderRadius: 2,
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  minWidth: { xs: '100%', sm: 200 },
};

export const cardContent: SxProps<Theme> = {
  color: 'white',
  display: 'flex',
  flexDirection: 'column',
  flexGrow: 1,
  minHeight: { xs: 300, sm: 380 },
};

export const title: SxProps<Theme> = {
  fontWeight: 600,
  fontSize: { xs: '0.85rem', sm: '1rem' },
  minHeight: { sm: 35 },
};

export const image: SxProps<Theme> = {
  height: { xs: 100, sm: 135 },
  objectFit: 'contain',
};

export const description: SxProps<Theme> = {
  fontSize: { xs: '0.7rem', sm: '0.75rem' },
  my: 1,
};

export const quantityControls: SxProps<Theme> = {
  mt: 2,
  height: 40,
};

export const iconButton = (theme: Theme): SxProps<Theme> => ({
  transition: '0.25s',
  '&:hover': {
    boxShadow: `0 0 12px ${theme.palette.secondary.main}`,
    transform: 'scale(1.05)',
  },
});

export const buttonBox = (fullWidth: boolean): SxProps<Theme> => ({
  display: 'flex',
  alignItems: 'flex-end',
  columnGap: 2,
  width: fullWidth ? '100%' : 'auto',
});

export const addButton = (fullWidth: boolean): SxProps<Theme> => ({
  backgroundColor: 'secondary.main',
  border: '1px solid white',
  justifySelf: 'flex-end',
  width: fullWidth ? '100%' : 'auto',
  ':hover': {
    backgroundColor: 'primary.main',
  },
});

export const personalizeButton = (fullWidth: boolean): SxProps<Theme> => ({
  minWidth: '50px',
  width: fullWidth ? '30%' : 'auto',
  ':hover': {
    backgroundColor: 'primary.main',
  },
});
