import {
  Drawer,
  IconButton,
  Typography,
  List,
  Button,
  Divider,
  Paper,
  Box,
  Badge,
  CardMedia,
} from '@mui/material';
import { Delete, Add, Remove, ShoppingCart } from '@mui/icons-material';

import { OrderSummaryModal, OrderSuccessModal } from 'components';
import { useCartLogic } from './Cart.logic';
import * as styles from './Cart.styles';

export const Cart = (): JSX.Element => {
  const {
    cartItems,
    isDrawerOpen,
    totalQuantity,
    summaryOpen,
    successOpen,
    closeDrawer,
    openSummary,
    confirmOrder,
    setSummaryOpen,
    setSuccessOpen,
    clearCart,
    decrementQuantity,
    incrementQuantity,
    removeItem,
    updateValue,
  } = useCartLogic();

  return (
    <Drawer anchor="right" open={isDrawerOpen} onClose={closeDrawer}>
      <Box sx={styles.drawerContainer}>
        <Box display="flex" width="90%" m={2} justifyContent="space-between">
          <Box display="flex" alignItems="center">
            <Badge badgeContent={totalQuantity} color="secondary">
              <ShoppingCart sx={styles.iconTitle} />
            </Badge>
            <Typography ml={2} fontSize={{ xs: 18, sm: 20 }} color="primary">
              Carrinho
            </Typography>
          </Box>
          <Typography onClick={closeDrawer} sx={{ cursor: 'pointer' }}>
            X
          </Typography>
        </Box>

        <List sx={{ width: '90%', alignSelf: 'center', flexGrow: 1, overflowY: 'auto' }}>
          {cartItems.map(item => (
            <Paper key={item.id} elevation={5} sx={styles.backgroundProduct}>
              <Box display="flex" p={1.5}>
                <Box display="flex" flexDirection="column">
                  <CardMedia component="img" height="70" image={item.image} />
                  <Box display="flex" mt={1} alignItems="center">
                    {item.quantity === 1 ? (
                      <Box onClick={() => removeItem(item.id)} sx={styles.incrementQuantityStyle}>
                        <Delete sx={styles.quantityIcons} />
                      </Box>
                    ) : (
                      <Box
                        onClick={() => decrementQuantity(item.id)}
                        sx={styles.incrementQuantityStyle}
                      >
                        <Remove sx={styles.quantityIcons} />
                      </Box>
                    )}
                    <Typography color="textSecondary" px={1.5}>
                      <strong>{item.quantity}</strong>
                    </Typography>
                    <Box
                      onClick={() => incrementQuantity(item.id)}
                      sx={styles.incrementQuantityStyle}
                    >
                      <Add sx={styles.quantityIcons} />
                    </Box>
                  </Box>
                </Box>
                <Box ml={2} flexGrow={1}>
                  <Box display="flex" justifyContent="space-between">
                    <Typography color="textSecondary" fontWeight={600}>
                      {item.name}
                    </Typography>
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
                    R${item.price}
                  </Typography>
                </Box>
              </Box>
            </Paper>
          ))}
        </List>

        <Divider />

        <Box sx={styles.footerContainer}>
          <Typography variant="subtitle1" color="primary" fontWeight={600} alignSelf="end">
            Total: {updateValue()}
          </Typography>
          <Box display="flex" gap={1} mt={2} alignSelf="end">
            <Button variant="outlined" color="primary" onClick={clearCart}>
              Limpar
            </Button>
            <Button variant="contained" onClick={openSummary}>
              Fazer Pedido
            </Button>
          </Box>
        </Box>
      </Box>

      <OrderSummaryModal
        open={summaryOpen}
        onClose={() => setSummaryOpen(false)}
        onConfirm={confirmOrder}
      />

      <OrderSuccessModal
        open={successOpen}
        onClose={() => {
          setSuccessOpen(false);
          closeDrawer();
        }}
      />
    </Drawer>
  );
};
