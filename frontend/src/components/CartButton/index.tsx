import { ShoppingCart } from '@mui/icons-material';
import { Badge, IconButton } from '@mui/material';

import { useCart } from 'utils';

export const CartButton = (): JSX.Element => {
  const { setIsDrawerOpen, totalQuantity } = useCart();

  const openDrawer = () => {
    setIsDrawerOpen(true);
  };

  return (
    <IconButton
      onClick={openDrawer}
      style={{
        position: 'fixed',
        top: '15%',
        right: 16,
        backgroundColor: 'primary.main',
      }}
    >
      <Badge badgeContent={totalQuantity} sx={{ color: 'white' }}>
        <ShoppingCart />
      </Badge>
    </IconButton>
  );
};
