import { Modal, Box, Typography, useTheme } from '@mui/material';
import { useLanguage } from 'utils';

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
          width: 420,
          bgcolor: theme.palette.background.default,
          color: theme.palette.text.primary,
          borderRadius: 2,
          boxShadow: `0px 0px 30px ${theme.palette.primary.main}55`,
          p: 4,
          transition: 'all 0.3s ease',
          border: `1px solid ${theme.palette.divider}`,
        }}
      >
        <Typography variant="h6" mb={2}>
          {t('infoModal.description')}
        </Typography>

        <Typography variant="body1">{t('infoModal.text')}</Typography>
      </Box>
    </Modal>
  );
};
