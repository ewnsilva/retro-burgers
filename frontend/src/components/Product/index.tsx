import {
  Typography,
  Button,
  Card,
  CardMedia,
  CardContent,
  Grid2 as Grid,
  IconButton,
} from '@mui/material';
import { ShoppingCart, Delete, Add, Remove } from '@mui/icons-material';

import { IProductsList } from 'context';
import { useCart } from 'utils/hooks';

export const ProductCard: React.FC<IProductsList> = ({ item }) => {
  const { addToCart, isInCart, incrementQuantity, decrementQuantity, cartItems } = useCart();

  const cartItem = cartItems.find(cartItem => cartItem.id === item.id);
  const quantity = cartItem?.quantity || 0;

  return (
    <Card
      key={item.id}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'transparent',
        border: '2px solid white',
        borderRadius: 2,
      }}
    >
      <CardContent
        sx={{
          flexGrow: 1,
          display: 'flex',
          flexDirection: 'column',
          color: 'white',
        }}
      >
        <Grid container direction="column" spacing={1}>
          <Grid>
            <Typography
              gutterBottom
              variant="h6"
              component="div"
              fontWeight={600}
              sx={{ fontSize: { xs: '0.8rem', sm: '1rem' }, height: 35 }}
            >
              {item.name}
            </Typography>
          </Grid>
          <CardMedia component="img" height="120" image={item.image} alt={item.name} />
          {item.description && (
            <Grid>
              <Typography
                variant="body2"
                sx={{
                  fontSize: { xs: '0.65rem', sm: '0.75rem' },
                  height: 50,
                  my: 2,
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
                justifyContent="space-around"
                spacing={1}
                sx={{ mt: 2 }}
              >
                <Grid>
                  {quantity === 1 ? (
                    <IconButton onClick={() => decrementQuantity(item.id)} color="primary">
                      <Delete />
                    </IconButton>
                  ) : (
                    <IconButton onClick={() => decrementQuantity(item.id)} color="primary">
                      <Remove />
                    </IconButton>
                  )}
                </Grid>

                <Grid>
                  <Typography variant="body1">{quantity}</Typography>
                </Grid>

                <Grid>
                  <IconButton onClick={() => incrementQuantity(item.id)} color="secondary">
                    <Add />
                  </IconButton>
                </Grid>
              </Grid>
            ) : (
              <Button
                variant="contained"
                onClick={() => addToCart(item)}
                sx={{
                  mt: 2,
                  backgroundColor: 'secondary.main',
                  border: '1px solid white',
                  alignSelf: 'end',
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
