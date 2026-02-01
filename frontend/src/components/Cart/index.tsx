import {
  Badge,
  Box,
  Button,
  CardMedia,
  Chip,
  Divider,
  Drawer,
  IconButton,
  List,
  Paper,
  Typography,
  useMediaQuery,
} from '@mui/material';
import { Delete, Add, Remove, ShoppingCart } from '@mui/icons-material';

import { OrderSummaryModal } from 'components/OrderSummaryModal';
import { useLanguage } from 'utils/hooks/useLanguage';
import { IAdditionals, ICartProducts } from 'utils/interfaces';

import { useCartLogic } from './Cart.logic';
import * as styles from './Cart.styles';

interface CartProps {
  onOrderSuccess: () => void;
}

export const Cart = ({ onOrderSuccess }: CartProps): JSX.Element => {
  const { t, language } = useLanguage();
  const {
    cartItems,
    isDrawerOpen,
    totalQuantity,
    summaryOpen,
    closeDrawer,
    openSummary,
    confirmOrder,
    setSummaryOpen,
    clearCart,
    decrementQuantity,
    incrementQuantity,
    removeItem,
    updateValue,
  } = useCartLogic();
  const matchesXs = useMediaQuery('(max-width: 465px)');

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
    <Drawer anchor="right" open={isDrawerOpen} onClose={closeDrawer}>
      <Box sx={styles.drawerContainer}>
        <Box display="flex" width="90%" m={2} justifyContent="space-between">
          <Box display="flex" alignItems="center">
            <Badge badgeContent={totalQuantity} color="secondary">
              <ShoppingCart sx={styles.iconTitle} />
            </Badge>
            <Typography ml={2} fontSize={{ xs: 18, sm: 20 }} color="primary" fontWeight={700}>
              {t('cart.title')}
            </Typography>
          </Box>
          <Typography onClick={closeDrawer} sx={{ cursor: 'pointer' }}>
            X
          </Typography>
        </Box>

        <List
          sx={{
            width: '90%',
            alignSelf: 'center',
            flex: 1,
            overflowY: 'auto',
          }}
        >
          {cartItems.map(item => (
            <Paper key={item.id} elevation={5} sx={styles.backgroundProduct}>
              <Box display="flex" p={1.5}>
                <Box display="flex" flexDirection="column">
                  <CardMedia component="img" height="70" image={item.logo} />
                  <Box display="flex" mt={1} alignItems="center">
                    {item.quantity === 1 ? (
                      <Button
                        onClick={() => removeItem(item.id)}
                        sx={styles.incrementQuantityStyle}
                      >
                        <Delete sx={styles.quantityIcons} />
                      </Button>
                    ) : (
                      <Button
                        onClick={() => decrementQuantity(item.id)}
                        sx={styles.incrementQuantityStyle}
                      >
                        <Remove sx={styles.quantityIcons} />
                      </Button>
                    )}
                    <Typography color="textSecondary" px={1.5}>
                      <strong>{item.quantity}</strong>
                    </Typography>
                    <Button
                      onClick={() => incrementQuantity(item.id)}
                      sx={styles.incrementQuantityStyle}
                    >
                      <Add sx={styles.quantityIcons} />
                    </Button>
                  </Box>
                </Box>
                <Box ml={2} flexGrow={1}>
                  <Box display="flex" justifyContent="space-between">
                    <Box>
                      <Typography component="div" color="textSecondary" alignItems="center">
                        {language === 'pt' ? item.title?.pt : item.title?.en}
                        {item.isCustom && (
                          <Chip label="Custom" size="small" color="secondary" sx={{ ml: 0.5 }} />
                        )}
                      </Typography>

                      {renderAdditionals(item)}
                    </Box>
                    {Number(item.quantity) > 1 && (
                      <IconButton
                        color="primary"
                        size="small"
                        onClick={() => removeItem(item.id)}
                        sx={{ p: 0 }}
                      >
                        <Delete sx={{ width: 20, p: 0 }} />
                      </IconButton>
                    )}
                  </Box>
                  <Typography color="textSecondary" fontSize={12}>
                    {language === 'pt' ? 'R$ ' : 'U$ '}
                    {language === 'pt' ? item.price?.brl : item.price?.usd}
                  </Typography>
                </Box>
              </Box>
            </Paper>
          ))}
        </List>

        <Divider />

        <Box sx={styles.footerContainer}>
          <Typography variant="subtitle1" color="primary" fontWeight={600} alignSelf="end">
            {t('cart.total')}
            {updateValue()}
          </Typography>
          <Box display="flex" gap={1} mt={2} alignSelf="end">
            <Button
              size={matchesXs ? 'small' : 'medium'}
              variant="outlined"
              color="primary"
              onClick={clearCart}
            >
              {t('cart.clear')}
            </Button>
            <Button size={matchesXs ? 'small' : 'medium'} variant="contained" onClick={openSummary}>
              {t('cart.order')}
            </Button>
          </Box>
        </Box>
      </Box>

      <OrderSummaryModal
        open={summaryOpen}
        onClose={() => setSummaryOpen(false)}
        onConfirm={() => {
          confirmOrder();
          onOrderSuccess();
          closeDrawer();
        }}
      />
    </Drawer>
  );
};
