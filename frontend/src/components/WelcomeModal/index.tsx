import { useEffect, useState } from 'react';
import { Box, Modal, Typography, Button } from '@mui/material';
import { useTheme } from 'utils/context/Theme';
import { useLanguage } from 'utils/hooks/useLanguage';

type Props = {
  onFinish: () => void;
};

export const WelcomeModal = ({ onFinish }: Props) => {
  const { currentColors } = useTheme();
  const { t } = useLanguage();

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
          {t('welcome.title')}
        </Typography>

        <Typography
          sx={{
            color: currentColors.primary,
            textShadow: `0 0 10px ${currentColors.primary}`,
            mb: 3,
          }}
        >
          {t('welcome.subtitle')}
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
          {t('welcome.cta')}
        </Button>

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
