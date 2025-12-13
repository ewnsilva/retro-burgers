import { useState, useEffect } from 'react';

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
  SxProps,
} from '@mui/material';
import { Delete, Add, Remove, ShoppingCart } from '@mui/icons-material';

import { OrderSummaryModal, OrderSuccessModal } from 'components';
import { useCart } from 'utils';

const incrementQuantityStyle: SxProps = {
  py: { xs: 1, sm: 0 },
  px: { xs: 1.5, sm: 1 },
  minWidth: 36,
  backgroundColor: 'secondary.main',
  borderTopLeftRadius: 5,
  borderBottomLeftRadius: 5,
  border: '1px solid transparent',
  borderRightColor: 'background.default',
  '&:hover': {
    cursor: 'pointer',
  },
};

export const Cart = (): JSX.Element => {
  const {
    cartItems,
    isDrawerOpen,
    totalQuantity,
    clearCart,
    decrementQuantity,
    incrementQuantity,
    removeItem,
    setIsDrawerOpen,
    updateValue,
  } = useCart();

  const [summaryOpen, setSummaryOpen] = useState(false);
  const [successOpen, setSuccessOpen] = useState(false);

  const closeDrawer = () => {
    setIsDrawerOpen(false);
  };

  const handleOpenModal = () => {
    setSummaryOpen(true);
  };

  useEffect(() => {
    if (cartItems.length === 0 && !successOpen) {
      setIsDrawerOpen(false);
    }
  }, [cartItems, setIsDrawerOpen]);

  return (
    <Drawer anchor="right" open={isDrawerOpen} onClose={closeDrawer}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          width: { xs: '100vw', sm: 350 },
          height: '100%',
          backgroundColor: 'info.main',
        }}
      >
        <Box display="flex" width="90%" m={2} justifyContent="space-between">
          <Box display="flex" alignItems="center">
            <Badge badgeContent={totalQuantity} color="secondary" sx={{ color: 'white' }}>
              <ShoppingCart
                sx={{
                  backgroundColor: 'primary.main',
                  p: 1.5,
                  borderRadius: 2,
                  width: '2em',
                  height: '2em',
                }}
              />
            </Badge>
            <Typography variant="h5" ml={2} color="primary" sx={{ fontSize: { xs: 18, sm: 20 } }}>
              Carrinho
            </Typography>
          </Box>
          <Typography
            onClick={closeDrawer}
            sx={{
              border: '2px solid',
              borderColor: 'primary.main',
              alignSelf: 'top',
              fontSize: 12,
              fontWeight: 600,
              height: '1.8em',
              width: '2em',
              borderRadius: 5,
              textAlign: 'center',
              color: 'primary.main',
              '&:hover': {
                cursor: 'pointer',
                backgroundColor: 'primary.main',
                color: 'white',
              },
            }}
          >
            X
          </Typography>
        </Box>

        {cartItems?.length > 0 && (
          <List sx={{ width: '90%', alignSelf: 'center', flexGrow: 1, overflowY: 'auto' }}>
            {cartItems.map(item => (
              <Paper
                key={item.id}
                elevation={5}
                sx={{
                  mb: 1,
                  backgroundColor: 'info.main',
                  border: '1.2px solid',
                  borderColor: 'background.default',
                }}
              >
                <Box key={item.id} sx={{ display: 'flex', alignItems: 'top', p: 1.5 }}>
                  <Box display="flex" flexDirection="column">
                    <CardMedia component="img" height="70" image={item.image} alt={item.name} />
                    <Box
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        border: '1px solid',
                        borderColor: 'background.default',
                        borderRadius: 1,
                        mt: 1,
                      }}
                    >
                      {item.quantity === 1 ? (
                        <Box
                          color="error"
                          onClick={() => removeItem(item.id)}
                          sx={incrementQuantityStyle}
                        >
                          <Delete
                            sx={{
                              width: 15,
                              color: 'background.default',
                            }}
                          />
                        </Box>
                      ) : (
                        <Box
                          color="error"
                          onClick={() => decrementQuantity(item.id)}
                          sx={incrementQuantityStyle}
                        >
                          <Remove sx={{ width: 15, color: 'background.default' }} />
                        </Box>
                      )}
                      <Typography variant="body1" color="textSecondary" sx={{ px: 1.5 }}>
                        {item.quantity}
                      </Typography>
                      <Box
                        color="primary"
                        onClick={() => incrementQuantity(item.id)}
                        sx={incrementQuantityStyle}
                      >
                        <Add sx={{ width: 15, color: 'background.default' }} />
                      </Box>
                    </Box>
                  </Box>
                  <Box ml={2} width="100%">
                    <Box display="flex" justifyContent="space-between">
                      <Typography
                        fontSize={14}
                        fontWeight={600}
                        sx={{ color: 'background.default' }}
                      >
                        {item.name}
                      </Typography>
                      <IconButton
                        color="primary"
                        size="small"
                        onClick={() => removeItem(item.id)}
                        sx={{ p: 0 }}
                      >
                        <Delete sx={{ width: 20, p: 0 }} />
                      </IconButton>
                    </Box>
                    <Typography fontSize={12} color="textSecondary">
                      R${item.price}
                    </Typography>
                  </Box>
                </Box>
              </Paper>
            ))}
          </List>
        )}

        <Divider />
        <Box
          display="flex"
          flexDirection="column"
          alignSelf="center"
          position="absolute"
          bottom="2%"
          width="90%"
        >
          <Typography variant="subtitle1" color="primary" fontWeight={600} alignSelf="end">
            Total: {updateValue()}
          </Typography>
          <Box alignSelf="end">
            <Button
              onClick={clearCart}
              variant="outlined"
              color="primary"
              style={{ marginTop: 16 }}
            >
              Limpar
            </Button>

            <Button
              variant="contained"
              style={{ marginTop: 16 }}
              onClick={handleOpenModal}
              sx={{ ml: 1.5 }}
            >
              Fazer Pedido
            </Button>
          </Box>
        </Box>
      </Box>

      <OrderSummaryModal
        open={summaryOpen}
        onClose={() => setSummaryOpen(false)}
        onConfirm={() => {
          setSummaryOpen(false);
          setSuccessOpen(true);
          clearCart();
        }}
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
