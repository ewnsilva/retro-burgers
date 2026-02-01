import { SxProps, Theme } from '@mui/material';

export const headerContainer = (theme: Theme): SxProps<Theme> => ({
  width: '100%',
  display: 'flex',
  flexDirection: { xs: 'column', sm: 'row' },
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: { xs: 1, sm: 0 },
  backgroundColor: theme.palette.info.main,
  py: { xs: 1, sm: 0 },
});

export const logoText = (theme: Theme): SxProps<Theme> => ({
  backgroundImage: `radial-gradient(
    50% 50% at 50% 50%,
    ${theme.palette.background.default} 0%,
    ${theme.palette.primary.main} 100%
  )`,
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  fontSize: { xs: '1.5rem', sm: '2rem' },
  fontWeight: 'bold',
  display: 'inline-block',
});

export const searchField: SxProps<Theme> = {
  minWidth: { xs: '80%', sm: 200 },
  '& .MuiInputBase-input': {
    color: 'primary.main',
  },
};
