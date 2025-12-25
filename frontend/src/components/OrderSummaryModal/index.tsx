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

import { useCart } from 'utils/hooks/products/useCart';
import { useLanguage } from 'utils/hooks/useLanguage';

type Props = {
  open: boolean;
  onClose: () => void;
  onConfirm: () => void;
};

export const OrderSummaryModal = ({ open, onClose, onConfirm }: Props) => {
  const { language, t } = useLanguage();
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
        {t('orderSummary.title')}
      </DialogTitle>

      <DialogContent dividers>
        {cartItems.map(item => (
          <Box key={item.id} display="flex" justifyContent="space-between" mb={1}>
            <Typography fontWeight={600} color="info">
              {language === 'pt' ? item.namePt : item.nameEn} x{item.quantity}
            </Typography>
            <Typography color="info">
              {language === 'pt' ? t('currency.brl') : t('currency.usd')}
              {language === 'pt'
                ? (Number(item.pricePt) * Number(item.quantity)).toFixed(2)
                : (Number(item.priceEn) * Number(item.quantity)).toFixed(2)}
            </Typography>
          </Box>
        ))}

        <Divider sx={{ mt: 2, mb: 1 }} />

        <Typography variant="h6" fontWeight={700} textAlign="right" color="primary">
          {t('orderSummary.total')} {updateValue()}
        </Typography>
      </DialogContent>

      <DialogActions sx={{ px: 3, py: 2 }}>
        <Button onClick={onClose} color="secondary" variant="outlined">
          {t('orderSummary.edit')}
        </Button>

        <Button onClick={onConfirm} variant="contained" color="primary">
          {t('orderSummary.confirm')}
        </Button>
      </DialogActions>
    </Dialog>
  );
};
