import { useEffect, useState } from 'react';
import { Box, Typography, Button } from '@mui/material';
import { useTheme } from 'utils/context';

export const MenuHint = () => {
  const { currentColors } = useTheme();
  const [show, setShow] = useState(false);
  const [coords, setCoords] = useState<DOMRect | null>(null);

  useEffect(() => {
    const shown = localStorage.getItem('menuHintShown');
    if (!shown) {
      const el = document.getElementById('menu-icon-button');
      if (el) {
        const rect = el.getBoundingClientRect();
        setCoords(rect);
        setShow(true);
      }
      localStorage.setItem('menuHintShown', 'true');
    }
  }, []);

  if (!show || !coords) {
    return null;
  }

  return (
    <Box
      sx={{
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
      }}
      onClick={() => setShow(false)}
    >
      <Box
        sx={{
          position: 'absolute',
          top: coords.top - 12,
          left: coords.left - 12,
          width: coords.width + 24,
          height: coords.height + 24,
          borderRadius: 2,
          border: `2px solid ${currentColors.primary}`,
          boxShadow: `0 0 18px ${currentColors.primary}`,
          animation: 'pulse 2s infinite',
          pointerEvents: 'none',
        }}
      />

      <Box
        sx={{
          position: 'absolute',
          top: coords.bottom + 12,
          left: coords.left - 300,
          bgcolor: 'background.paper',
          borderRadius: 2,
          p: 2,
          width: 260,
          boxShadow: 6,
          border: `1px solid ${currentColors.secondary}`,
        }}
      >
        <Typography variant="h6" sx={{ color: currentColors.primary, mb: 1 }}>
          <strong>Dica rápida!</strong>
        </Typography>
        <Typography color="primary" sx={{ mb: 2 }}>
          Aqui você pode trocar o <strong>tema visual</strong> do app e ativar a{' '}
          <strong>música retrô</strong> 🎵.
        </Typography>

        <Button
          variant="contained"
          fullWidth
          sx={{
            bgcolor: currentColors.primary,
            ':hover': { bgcolor: currentColors.secondary },
            color: '#fff',
          }}
          onClick={() => setShow(false)}
        >
          Entendi!
        </Button>
      </Box>

      <style>
        {`
          @keyframes pulse {
            0% { box-shadow: 0 0 10px ${currentColors.primary}; }
            100% { box-shadow: 0 0 25px ${currentColors.secondary}; }
          }
        `}
      </style>
    </Box>
  );
};
