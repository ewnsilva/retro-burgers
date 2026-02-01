import { useMemo, useState, useEffect } from 'react';
import {
  Box,
  Button,
  Checkbox,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
  IconButton,
  Typography,
  useMediaQuery,
} from '@mui/material';
import { Add, Remove } from '@mui/icons-material';

import { useLanguage } from 'utils/hooks/useLanguage';
import { IAdditionals, IProducts, ICartProducts } from 'utils/interfaces';

interface CustomizeBurgerModalProps {
  open: boolean;
  product: IProducts | null;
  additionals: IAdditionals[];
  onClose: () => void;
  onConfirm: (customProduct: any) => void;
}

export const CustomizeBurgerModal = ({
  open,
  product,
  additionals,
  onClose,
  onConfirm,
}: CustomizeBurgerModalProps) => {
  const { language, t } = useLanguage();
  const matchesXs = useMediaQuery('(max-width: 465px)');

  const [selectedAdditionals, setSelectedAdditionals] = useState<IAdditionals[]>([]);

  const basePrice = useMemo(() => {
    if (!product) return 0;
    return language === 'pt' ? product.price?.brl : product.price?.usd;
  }, [product, language]);

  const totalAdditionalsPrice = useMemo(() => {
    return selectedAdditionals.reduce((sum, add) => {
      const price = language === 'pt' ? Number(add.price?.brl) : Number(add.price?.usd);
      if (add.type === 'quantity') {
        return sum + price * Number(add.quantity ?? 0);
      }
      return sum + price;
    }, 0);
  }, [selectedAdditionals, language]);

  const totalPrice = Number(basePrice) + Number(totalAdditionalsPrice);

  const toggleBooleanAdditional = (additional: IAdditionals) => {
    setSelectedAdditionals(prev =>
      prev.some(a => a.id === additional.id)
        ? prev.filter(a => a.id !== additional.id)
        : [...prev, additional]
    );
  };

  const changeQuantityAdditional = (additional: IAdditionals, delta: number) => {
    setSelectedAdditionals(prev => {
      const existing = prev.find(a => a.id === additional.id);

      if (!existing && delta > 0) {
        return [...prev, { ...additional, quantity: 1 }];
      }

      if (existing) {
        const newQuantity = (existing.quantity ?? 0) + delta;
        if (newQuantity <= 0) {
          return prev.filter(a => a.id !== additional.id);
        }
        return prev.map(a => (a.id === additional.id ? { ...a, quantity: newQuantity } : a));
      }

      return prev;
    });
  };

  const handleConfirm = () => {
    if (!product) return;

    const customProduct: ICartProducts = {
      ...product,
      id: Date.now(),
      title: product.title,
      quantity: 1,
      totalPrice,
      isCustom: true,
      additionals: selectedAdditionals,
    };

    onConfirm(customProduct);
    onClose();
  };

  useEffect(() => {
    if (!open) {
      setSelectedAdditionals([]);
    }
  }, [open]);

  if (!product) return null;

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
      <DialogTitle color="primary" fontWeight={700}>
        {language === 'pt' ? product.title?.pt : product.title?.en}
      </DialogTitle>

      <DialogContent>
        <Typography color="textSecondary" variant="subtitle2" mb={1} fontWeight={600}>
          {t('costumizeBurgerModal.costumizeTitle')}
        </Typography>

        {additionals?.map(additional => {
          const selected = selectedAdditionals.find(a => a.id === additional.id);
          const price = language === 'pt' ? additional.price?.brl : additional.price?.usd;

          return (
            <Box key={additional.id} py={1}>
              <Box display="flex" justifyContent="space-between" alignItems="center">
                <Typography color="textSecondary">
                  {language === 'pt' ? additional.title?.pt : additional.title?.en}
                </Typography>

                {additional.type === 'boolean' ? (
                  <Checkbox
                    size={matchesXs ? 'small' : 'medium'}
                    checked={!!selected}
                    onChange={() => toggleBooleanAdditional(additional)}
                  />
                ) : (
                  <Box display="flex" alignItems="center">
                    <IconButton
                      size="small"
                      onClick={() => changeQuantityAdditional(additional, -1)}
                    >
                      <Remove />
                    </IconButton>
                    <Typography color="textSecondary" px={1}>
                      {selected?.quantity ?? 0}
                    </Typography>
                    <IconButton
                      size="small"
                      onClick={() => changeQuantityAdditional(additional, 1)}
                    >
                      <Add />
                    </IconButton>
                  </Box>
                )}
              </Box>

              <Typography color="textSecondary" variant="caption">
                {language === 'pt' ? 'R$ ' : 'U$ '}
                {Number(price).toFixed(2)}
              </Typography>

              <Divider sx={{ mt: 1 }} />
            </Box>
          );
        })}
      </DialogContent>

      <DialogActions>
        <Box width="100%" display="flex" justifyContent="space-between">
          <Typography color="textSecondary" fontWeight={600}>
            {t('cart.total')} {language === 'pt' ? 'R$ ' : 'U$ '}
            {totalPrice.toFixed(2)}
          </Typography>

          <Box display="flex" columnGap={2}>
            <Button
              onClick={onClose}
              variant="outlined"
              color="primary"
              size={matchesXs ? 'small' : 'medium'}
            >
              {t('costumizeBurgerModal.cancel')}
            </Button>
            <Button
              variant="contained"
              onClick={handleConfirm}
              size={matchesXs ? 'small' : 'medium'}
            >
              {t('costumizeBurgerModal.add')}
            </Button>
          </Box>
        </Box>
      </DialogActions>
    </Dialog>
  );
};
