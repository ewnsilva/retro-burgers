import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
  Box,
  Divider,
} from '@mui/material';
import { useCart } from 'utils';

type Props = {
  open: boolean;
  onClose: () => void;
  onConfirm: () => void;
};

export const OrderSummaryModal = ({ open, onClose, onConfirm }: Props) => {
  const { cartItems, updateValue } = useCart();

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="sm"
      fullWidth
      sx={{
        '& .MuiPaper-root': {
          backgroundColor: 'background.default',
        },
      }}
    >
      <DialogTitle variant="h5" fontWeight={700} color="primary">
        Resumo do Pedido
      </DialogTitle>

      <DialogContent dividers>
        {cartItems.map(item => (
          <Box key={item.id} display="flex" justifyContent="space-between" mb={1}>
            <Typography fontWeight={600} color="info">
              {item.name} x{item.quantity}
            </Typography>
            <Typography color="info">R$ {item.price * Number(item.quantity)}</Typography>
          </Box>
        ))}

        <Divider sx={{ mt: 2, mb: 1 }} />

        <Typography variant="h6" fontWeight={700} textAlign="right" color="primary">
          Total: {updateValue()}
        </Typography>
      </DialogContent>

      <DialogActions sx={{ px: 3, py: 2 }}>
        <Button onClick={onClose} color="secondary" variant="outlined">
          Fazer alteração
        </Button>

        <Button onClick={onConfirm} variant="contained" color="primary">
          Concluir Pedido
        </Button>
      </DialogActions>
    </Dialog>
  );
};
