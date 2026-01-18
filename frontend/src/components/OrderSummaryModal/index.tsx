import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
  Box,
  Divider,
  Chip,
} from '@mui/material';

import { useCart } from 'utils/hooks/products/useCart';
import { useLanguage } from 'utils/hooks/useLanguage';
import { IAdditionals, ICartProducts } from 'utils/interfaces';

type Props = {
  open: boolean;
  onClose: () => void;
  onConfirm: () => void;
};

export const OrderSummaryModal = ({ open, onClose, onConfirm }: Props) => {
  const { language, t } = useLanguage();
  const { cartItems, updateValue } = useCart();

  const renderAdditionals = (item: ICartProducts) => {
    if (!item.isCustom || !item.additionals?.length) return null;

    return (
      <Box mt={0.5}>
        {item.additionals.map((add: IAdditionals) => (
          <Typography key={add.id} variant="caption" color="textSecondary" display="block">
            • {language === 'pt' ? add.title?.pt : add.title?.en}
            {add.type === 'quantity' && add.quantity ? ` x${add.quantity}` : ''}
          </Typography>
        ))}
      </Box>
    );
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle variant="h5" fontWeight={700} color="primary">
        {t('orderSummary.title')}
      </DialogTitle>

      <DialogContent dividers>
        {cartItems.map(item => (
          <Box key={item.id} mb={1}>
            <Box display="flex" justifyContent="space-between">
              <Typography
                component="div"
                fontWeight={600}
                color="textSecondary"
                alignItems="center"
              >
                {language === 'pt' ? item.title?.pt : item.title?.en} x{item.quantity}{' '}
                {item.isCustom && (
                  <Chip label="Custom" size="small" color="secondary" sx={{ ml: 0.5 }} />
                )}
              </Typography>

              <Typography color="textSecondary">
                {language === 'pt' ? t('currency.brl') : t('currency.usd')}
                {Number(item.totalPrice).toFixed(2)}
              </Typography>
            </Box>

            {renderAdditionals(item)}
          </Box>
        ))}

        <Divider sx={{ mt: 2, mb: 1 }} />

        <Typography variant="h6" fontWeight={700} textAlign="right" color="primary">
          {t('orderSummary.total')} {updateValue()}
        </Typography>
      </DialogContent>

      <DialogActions>
        <Button onClick={onClose} variant="outlined">
          {t('orderSummary.edit')}
        </Button>
        <Button onClick={onConfirm} variant="contained">
          {t('orderSummary.confirm')}
        </Button>
      </DialogActions>
    </Dialog>
  );
};
