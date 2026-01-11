import { useMemo, useState, useEffect } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Typography,
  Box,
  IconButton,
  Button,
  Checkbox,
  Divider,
} from '@mui/material';
import { Add, Remove } from '@mui/icons-material';

import { useLanguage } from 'utils/hooks/useLanguage';
import { IAdditional, IProducts } from 'utils/interfaces';

interface CustomizeBurgerModalProps {
  open: boolean;
  product: IProducts | null;
  additionals: IAdditional[];
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

  const [selectedAdditionals, setSelectedAdditionals] = useState<IAdditional[]>([]);

  useEffect(() => {
    if (!open) {
      setSelectedAdditionals([]);
    }
  }, [open]);

  const basePrice = useMemo(() => {
    if (!product) return 0;
    return language === 'pt' ? product.pricePt : product.priceEn;
  }, [product, language]);

  const totalAdditionalsPrice = useMemo(() => {
    return selectedAdditionals.reduce((sum, add) => {
      const price = language === 'pt' ? add.pricePt : add.priceEn;
      if (add.type === 'quantity') {
        return sum + price * (add.quantity ?? 0);
      }
      return sum + price;
    }, 0);
  }, [selectedAdditionals, language]);

  const totalPrice = basePrice + totalAdditionalsPrice;

  const toggleBooleanAdditional = (additional: IAdditional) => {
    setSelectedAdditionals(prev =>
      prev.some(a => a.id === additional.id)
        ? prev.filter(a => a.id !== additional.id)
        : [...prev, additional]
    );
  };

  const changeQuantityAdditional = (additional: IAdditional, delta: number) => {
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

    const customProduct = {
      ...product,
      id: Date.now(),
      namePt: `${product.namePt}`,
      nameEn: `${product.nameEn}`,
      quantity: 1,
      totalPrice,
      isCustom: true,
      additionals: selectedAdditionals,
    };

    onConfirm(customProduct);
    onClose();
  };

  if (!product) return null;

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
      <DialogTitle color="primary" fontWeight={700}>
        {product.namePt}
      </DialogTitle>

      <DialogContent>
        <Typography color="textSecondary" variant="subtitle2" mb={1}>
          {t('costumizeBurgerModal.costumizeTitle')}
        </Typography>

        {additionals.map(additional => {
          const selected = selectedAdditionals.find(a => a.id === additional.id);
          const price = language === 'pt' ? additional.pricePt : additional.priceEn;

          return (
            <Box key={additional.id} py={1}>
              <Box display="flex" justifyContent="space-between" alignItems="center">
                <Typography color="textSecondary">
                  {language === 'pt' ? additional.namePt : additional.nameEn}
                </Typography>

                {additional.type === 'boolean' ? (
                  <Checkbox
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
            <Button onClick={onClose} variant="outlined" color="primary">
              {t('costumizeBurgerModal.cancel')}
            </Button>
            <Button variant="contained" onClick={handleConfirm}>
              {t('costumizeBurgerModal.add')}
            </Button>
          </Box>
        </Box>
      </DialogActions>
    </Dialog>
  );
};
