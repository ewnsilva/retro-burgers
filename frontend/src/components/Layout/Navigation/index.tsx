import { Button, Box, useTheme, SxProps, Theme } from '@mui/material';
import { useLanguage } from 'utils/hooks/useLanguage';
import { ICategory } from 'utils/interfaces';

interface ButtonStyleProps {
  category: number;
  selectedCategory: number;
}

export const Navigation: React.FC<{
  setCategory: React.Dispatch<React.SetStateAction<number | null>>;
  category: number | null;
  categories: ICategory[];
}> = ({ setCategory, category, categories }) => {
  const theme = useTheme();
  const { t, language } = useLanguage();

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
        {categories.map(cat => (
          <Button
            key={cat.id}
            onClick={() => setCategory(cat.id)}
            sx={buttonStyle({
              category: category || 0,
              selectedCategory: cat.id,
            })}
          >
            {t(`${cat.title[language as 'pt' | 'en']}`)}
          </Button>
        ))}
      </Box>
    </Box>
  );
};
