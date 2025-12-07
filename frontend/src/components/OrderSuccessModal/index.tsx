import { Dialog, Box, Typography, Button, DialogContent, useTheme } from '@mui/material';

type Props = {
  open: boolean;
  onClose: () => void;
};

export const OrderSuccessModal = ({ open, onClose }: Props) => {
  const theme = useTheme();

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
          Pedido realizado!
        </Typography>

        <Typography variant="body1" color="textPrimary" sx={{ mb: 3 }}>
          Agradecemos pela preferência. Estamos preparando tudo com muito carinho. ❤️
        </Typography>

        <Button variant="contained" onClick={onClose} fullWidth>
          Fechar
        </Button>
      </DialogContent>
    </Dialog>
  );
};
