import { useEffect, useState } from 'react';
import { Box, Modal, Typography, Button } from '@mui/material';
import { useTheme } from 'utils/context';

export const WelcomeModal = ({ onFinish }: { onFinish: () => void }) => {
  const { currentColors, themeType } = useTheme();

  const [open, setOpen] = useState(false);

  useEffect(() => {
    const hasVisited = localStorage.getItem('hasVisitedMenuApp');

    if (!hasVisited) {
      setOpen(true);
      localStorage.setItem('hasVisitedMenuApp', 'true');
    }
  }, []);

  const handleClose = () => {
    setOpen(false);
    onFinish();
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 350,
          bgcolor: 'background.paper',
          borderRadius: 3,
          boxShadow: 24,
          p: 4,
          textAlign: 'center',
          border: `2px solid ${currentColors.primary}`,
          animation: 'neonGlow 2s infinite alternate',
        }}
      >
        <Typography
          variant="h4"
          sx={{
            fontWeight: 'bold',
            color: currentColors.primary,
            textShadow: `0 0 10px ${currentColors.primary}, 0 0 20px ${currentColors.secondary}`,
            mb: 1,
          }}
        >
          Bem-vindo!
        </Typography>

        <Typography
          sx={{
            color: currentColors.secondary,
            textShadow: `0 0 10px ${currentColors.secondary}`,
            mb: 3,
          }}
        >
          Explore nosso cardápio com estilo {themeType.toUpperCase()}!
        </Typography>

        <Button
          variant="contained"
          onClick={handleClose}
          sx={{
            mt: 2,
            bgcolor: currentColors.primary,
            color: '#fff',
            ':hover': { bgcolor: currentColors.secondary },
            boxShadow: `0 0 10px ${currentColors.primary}`,
          }}
        >
          Vamos lá!
        </Button>

        {/* Animação neon */}
        <style>
          {`
            @keyframes neonGlow {
              0% {
                box-shadow: 0 0 15px ${currentColors.primary};
              }
              100% {
                box-shadow: 0 0 30px ${currentColors.secondary};
              }
            }
          `}
        </style>
      </Box>
    </Modal>
  );
};
