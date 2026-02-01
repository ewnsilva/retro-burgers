import { GitHub } from '@mui/icons-material';
import { Modal, Box, Typography, useTheme, Button } from '@mui/material';
import { useLanguage } from 'utils/hooks/useLanguage';

interface InfoModalProps {
  open: boolean;
  onClose: () => void;
}

export const InfoModal = ({ open, onClose }: InfoModalProps) => {
  const theme = useTheme();
  const { t } = useLanguage();

  return (
    <Modal open={open} onClose={onClose}>
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: { xs: 380, sm: 420 },
          bgcolor: theme.palette.background.default,
          color: theme.palette.text.primary,
          borderRadius: 2,
          boxShadow: `0px 0px 30px ${theme.palette.primary.main}55`,
          p: 4,
          transition: 'all 0.3s ease',
          border: `1px solid ${theme.palette.divider}`,
        }}
      >
        <Typography variant="h6" mb={2} fontWeight={600}>
          {t('infoModal.description')}
        </Typography>

        <Typography variant="body1" pb={3}>
          {t('infoModal.text')}
        </Typography>

        <Button
          LinkComponent={'a'}
          href="https://github.com/ewnsilva/retro-burgers"
          target="_blank"
          size="large"
          color="info"
          variant="outlined"
        >
          <GitHub color="info" />
        </Button>
      </Box>
    </Modal>
  );
};
