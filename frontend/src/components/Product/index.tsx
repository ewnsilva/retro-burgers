import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Grid2 as Grid,
  IconButton,
  Typography,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import { Add, Delete, Remove, ShoppingCart } from '@mui/icons-material';
import { useMemo } from 'react';

import { IProductsList, useCart } from 'utils';

export const ProductCard: React.FC<IProductsList> = ({ item }) => {
  const matchesXs = useMediaQuery('(max-width: 465px)');
  const theme = useTheme();
  const { addToCart, isInCart, incrementQuantity, decrementQuantity, cartItems } = useCart();

  const cartItem = useMemo(
    () => cartItems.find(cartItem => cartItem.id === item.id),
    [cartItems, item.id]
  );

  const quantity = useMemo(() => cartItem?.quantity ?? 0, [cartItem]);

  return (
    <Card
      sx={{
        backgroundColor: 'transparent',
        border: '2px solid white',
        borderRadius: 2,
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        minWidth: { xs: '100%', sm: 200 },
      }}
    >
      <CardContent
        sx={{
          color: 'white',
          display: 'flex',
          flexDirection: 'column',
          flexGrow: 1,
        }}
      >
        <Grid container direction="column" spacing={1}>
          <Grid>
            <Typography
              gutterBottom
              variant="h6"
              component="div"
              fontWeight={600}
              sx={{
                fontSize: { xs: '0.85rem', sm: '1rem' },
                minHeight: { sm: 35 },
              }}
            >
              {item.name}
            </Typography>
          </Grid>

          <CardMedia
            component="img"
            image={item.image}
            alt={item.name}
            sx={{
              height: { xs: 100, sm: 120 },
              objectFit: 'contain',
            }}
          />

          {item.description && (
            <Grid>
              <Typography
                variant="body2"
                sx={{
                  fontSize: { xs: '0.7rem', sm: '0.75rem' },
                  my: 1.5,
                }}
              >
                {item.description}
              </Typography>
            </Grid>
          )}

          <Grid display="flex" flexDirection="column">
            <Typography sx={{ mt: 2 }} color="secondary" alignSelf="start">
              R${item.price.toFixed(2)}
            </Typography>

            {isInCart(item.id) ? (
              <Grid
                container
                alignItems="center"
                justifyContent="space-between"
                spacing={2}
                sx={{ mt: 2 }}
              >
                <Grid>
                  {quantity === 1 ? (
                    <IconButton
                      onClick={() => decrementQuantity(item.id)}
                      color="error"
                      sx={{
                        transition: '0.25s',
                        '&:hover': {
                          boxShadow: `0 0 12px ${theme.palette.secondary.main}`,
                          transform: 'scale(1.05)',
                        },
                      }}
                    >
                      <Delete />
                    </IconButton>
                  ) : (
                    <IconButton
                      onClick={() => decrementQuantity(item.id)}
                      color="error"
                      sx={{
                        transition: '0.25s',
                        '&:hover': {
                          boxShadow: `0 0 12px ${theme.palette.secondary.main}`,
                          transform: 'scale(1.05)',
                        },
                      }}
                    >
                      <Remove />
                    </IconButton>
                  )}
                </Grid>

                <Grid>
                  <Typography variant="body1">{quantity}</Typography>
                </Grid>

                <Grid>
                  <IconButton
                    onClick={() => incrementQuantity(item.id)}
                    color="secondary"
                    sx={{
                      transition: '0.25s',
                      '&:hover': {
                        boxShadow: `0 0 12px ${theme.palette.secondary.main}`,
                        transform: 'scale(1.05)',
                      },
                    }}
                  >
                    <Add />
                  </IconButton>
                </Grid>
              </Grid>
            ) : (
              <Button
                fullWidth={matchesXs}
                variant="contained"
                onClick={() => addToCart(item)}
                sx={{
                  alignSelf: 'end',
                  backgroundColor: 'secondary.main',
                  border: '1px solid white',
                  mt: 2,
                  ':hover': {
                    backgroundColor: 'primary.main',
                  },
                }}
              >
                <ShoppingCart color="inherit" />
              </Button>
            )}
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};
