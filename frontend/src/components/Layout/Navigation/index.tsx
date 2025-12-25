import { Button, Box, useTheme, SxProps, Theme } from '@mui/material';
import { useLanguage } from 'utils/hooks/useLanguage';

interface ButtonStyleProps {
  category: number;
  selectedCategory: number;
}

export const Navigation: React.FC<{
  setCategory: React.Dispatch<React.SetStateAction<number>>;
  category: number;
}> = ({ setCategory, category }) => {
  const theme = useTheme();
  const { t } = useLanguage();

  const buttonStyle =
    ({ category, selectedCategory }: ButtonStyleProps): SxProps<Theme> =>
    theme => ({
      width: { xs: '45%', sm: 150 },
      fontSize: { xs: 12, sm: 16 },
      fontWeight: 600,
      color: category === selectedCategory ? theme.palette.info.main : '#eeff00',
      transition: '0.25s',
      '&:hover': {
        color: theme.palette.info.main,
        transform: 'scale(1.05)',
      },
    });

  return (
    <Box
      component="nav"
      sx={{
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'yellow',
        marginBottom: 10,
      }}
    >
      <Box
        sx={{
          display: 'flex',
          backgroundImage: `linear-gradient(90deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
          width: '100%',
          justifyContent: 'center',
        }}
      >
        <Button onClick={() => setCategory(0)} sx={buttonStyle({ category, selectedCategory: 0 })}>
          {t('navigation.burgers')}
        </Button>
        <Button onClick={() => setCategory(1)} sx={buttonStyle({ category, selectedCategory: 1 })}>
          {t('navigation.snacks')}
        </Button>
        <Button onClick={() => setCategory(2)} sx={buttonStyle({ category, selectedCategory: 2 })}>
          {t('navigation.desserts')}
        </Button>
        <Button onClick={() => setCategory(3)} sx={buttonStyle({ category, selectedCategory: 3 })}>
          {t('navigation.drinks')}
        </Button>
      </Box>
    </Box>
  );
};
