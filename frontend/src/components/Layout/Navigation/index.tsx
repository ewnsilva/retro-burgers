import { Button, Box, useTheme, SxProps, Theme } from '@mui/material';
import { ICategories } from 'utils';

interface ButtonStyleProps {
  category: number;
  selectedCategory: number;
}

export const Navigation: React.FC<{
  setCategory: React.Dispatch<React.SetStateAction<number>>;
  categories: ICategories[];
}> = ({ setCategory, categories }) => {
  const theme = useTheme();

  const buttonStyle =
    ({ category, selectedCategory }: ButtonStyleProps): SxProps<Theme> =>
    theme => ({
      width: 150,
      color:
        category === selectedCategory ? theme.palette.info.main : theme.palette.background.default,
      fontWeight: 600,
      '&:hover': {
        color: theme.palette.info.main,
        textDecoration: 'underline',
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
        {categories.map(category => (
          <Button
            key={category.id}
            onClick={() => setCategory(category.id)}
            sx={buttonStyle({ category: category.id, selectedCategory: 0 })}
          >
            {category.title}
          </Button>
        ))}
      </Box>
    </Box>
  );
};
