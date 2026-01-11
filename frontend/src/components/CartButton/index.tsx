import { ShoppingCart } from '@mui/icons-material';
import { Badge, IconButton, useTheme } from '@mui/material';

import { useCart } from 'utils/hooks/products/useCart';

export const CartButton = (): JSX.Element => {
  const theme = useTheme();
  const { setIsDrawerOpen, totalQuantity } = useCart();

  const openDrawer = () => {
    setIsDrawerOpen(true);
  };

  return (
    <IconButton
      onClick={openDrawer}
      sx={{
        position: 'fixed',
        top: '20%',
        right: 16,
        transition: '0.25s',
        '&:hover': {
          boxShadow: `0 0 12px ${theme.palette.secondary.main}`,
          transform: 'scale(1.05)',
        },
      }}
    >
      <Badge
        badgeContent={totalQuantity}
        sx={{
          color: `${theme.palette.secondary.main}`,
          transition: '0.25s',
        }}
      >
        <ShoppingCart />
      </Badge>
    </IconButton>
  );
};
