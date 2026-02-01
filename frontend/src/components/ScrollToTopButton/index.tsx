import { KeyboardArrowUp } from '@mui/icons-material';
import { Fab, Zoom, useMediaQuery, useScrollTrigger, useTheme } from '@mui/material';

export const ScrollToTopButton = (): JSX.Element => {
  const theme = useTheme();
  const matchesXs = useMediaQuery('(max-width:465px)');
  const matchesSm = useMediaQuery('(max-width:900px)');

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 200,
  });

  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <Zoom in={trigger && matchesSm}>
      <Fab
        size={matchesXs ? 'small' : 'medium'}
        color="primary"
        onClick={handleClick}
        sx={{
          position: 'fixed',
          bottom: 45,
          right: 16,
          zIndex: theme.zIndex.tooltip,
          boxShadow: `0 0 12px ${theme.palette.primary.main}`,
          '&:hover': {
            transform: 'scale(1.05)',
          },
        }}
      >
        <KeyboardArrowUp />
      </Fab>
    </Zoom>
  );
};
