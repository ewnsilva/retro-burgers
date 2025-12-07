import { Button, Box, useTheme, SxProps, Theme } from '@mui/material';

interface ButtonStyleProps {
  category: number;
  selectedCategory: number;
}

export const Navigation: React.FC<{
  setCategory: React.Dispatch<React.SetStateAction<number>>;
  category: number;
}> = ({ setCategory, category }) => {
  const theme = useTheme();

  const buttonStyle =
    ({ category, selectedCategory }: ButtonStyleProps): SxProps<Theme> =>
    theme => ({
      width: 150,
      fontSize: 16,
      color: category === selectedCategory ? theme.palette.info.main : '#eeff00',
      fontWeight: 600,
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
          Hamburguers
        </Button>
        <Button onClick={() => setCategory(1)} sx={buttonStyle({ category, selectedCategory: 1 })}>
          Salgados
        </Button>
        <Button onClick={() => setCategory(2)} sx={buttonStyle({ category, selectedCategory: 2 })}>
          Doces
        </Button>
        <Button onClick={() => setCategory(3)} sx={buttonStyle({ category, selectedCategory: 3 })}>
          Bebidas
        </Button>
      </Box>
    </Box>
  );
};
