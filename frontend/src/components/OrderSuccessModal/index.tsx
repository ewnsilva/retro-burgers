import { Dialog, Box, Typography, Button, DialogContent, useTheme } from '@mui/material';
import { useLanguage } from 'utils';

type Props = {
  open: boolean;
  onClose: () => void;
};

export const OrderSuccessModal = ({ open, onClose }: Props) => {
  const theme = useTheme();
  const { t } = useLanguage();

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="xs"
      PaperProps={{
        sx: {
          borderRadius: 5,
          background: theme.palette.background.default,
        },
      }}
    >
      <DialogContent
        sx={{
          textAlign: 'center',
          py: 5,
        }}
      >
        <Box
          sx={{
            fontSize: 80,
            mb: 2,
            color: theme.palette.primary.main,
            textShadow: `0 0 8px ${theme.palette.primary.main}`,
          }}
        >
          ✔
        </Box>

        <Typography
          variant="h5"
          fontWeight={700}
          sx={{
            mb: 1,
            color: theme.palette.primary.main,
            textShadow: `0 0 10px ${theme.palette.primary.main}`,
          }}
        >
          {t('orderSuccess.title')}
        </Typography>

        <Typography variant="body1" color="textPrimary" sx={{ mb: 3 }}>
          {t('orderSuccess.message')} ❤️
        </Typography>

        <Button variant="contained" onClick={onClose} fullWidth>
          {t('orderSuccess.close')}
        </Button>
      </DialogContent>
    </Dialog>
  );
};
