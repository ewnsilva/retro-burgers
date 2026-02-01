import { ShoppingCart } from '@mui/icons-material';
import { Badge, IconButton, useMediaQuery, useTheme } from '@mui/material';

import { useCart } from 'utils/hooks/products/useCart';

export const CartButton = (): JSX.Element => {
  const theme = useTheme();
  const { setIsDrawerOpen, totalQuantity } = useCart();
  const matchesXs = useMediaQuery('(max-width: 465px)');

  const openDrawer = () => {
    setIsDrawerOpen(true);
  };

  return (
    <IconButton
      onClick={openDrawer}
      sx={{
        position: 'fixed',
        border: matchesXs ? `1px solid ${theme.palette.secondary.main}` : null,
        background: matchesXs ? `${theme.palette.background.default}` : null,
        top: '30%',
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
          '& .MuiBadge-badge': {
            top: matchesXs ? -5 : 'none',
            right: matchesXs ? -10 : 'none',
            border: matchesXs ? `1px solid ${theme.palette.secondary.main}` : 'none',
            backgroundColor: matchesXs ? theme.palette.background.default : 'none',
            color: theme.palette.secondary.main,
            fontSize: matchesXs ? '0.75rem' : '0.8rem',
            minWidth: matchesXs ? 22 : 18,
            height: matchesXs ? 22 : 18,
            fontWeight: 600,
          },
          color: `${theme.palette.secondary.main}`,
          transition: '0.25s',
        }}
      >
        <ShoppingCart />
      </Badge>
    </IconButton>
  );
};
