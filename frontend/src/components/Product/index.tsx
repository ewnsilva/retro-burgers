import { useMemo } from 'react';
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

import { useLanguage } from 'utils/hooks/useLanguage';
import { useCart } from 'utils/hooks/products/useCart';
import { IProductsList } from 'utils/interfaces';

import * as styles from './Product.styles';

export const ProductCard: React.FC<IProductsList> = ({ item }) => {
  const theme = useTheme();
  const matchesXs = useMediaQuery('(max-width: 465px)');

  const { language, t } = useLanguage();

  const { addToCart, isInCart, incrementQuantity, decrementQuantity, cartItems } = useCart();

  const cartItem = useMemo(
    () => cartItems.find(cartItem => cartItem.id === item.id),
    [cartItems, item.id]
  );

  const quantity = useMemo(() => cartItem?.quantity ?? 0, [cartItem]);

  const name = language === 'pt' ? item.namePt : item.nameEn;
  const description = language === 'pt' ? item.descriptionPt : item.descriptionEn;
  const price = language === 'pt' ? item.pricePt : item.priceEn;

  return (
    <Card sx={styles.card}>
      <CardContent>
        <Grid container display="flex" direction="column" spacing={1} sx={styles.cardContent}>
          <Grid>
            <Typography gutterBottom variant="h6" component="div" sx={styles.title}>
              {name}
            </Typography>
          </Grid>

          <CardMedia component="img" image={item.image} alt={item.namePt} sx={styles.image} />

          {description && (
            <Grid>
              <Typography variant="body2" sx={styles.description}>
                {description}
              </Typography>
            </Grid>
          )}

          <Grid display="flex" mt="auto" flexDirection="column">
            <Typography color="secondary" alignSelf="start">
              {language === 'pt' ? t('currency.brl') : t('currency.usd')}
              {price.toFixed(2)}
            </Typography>

            <Grid
              container
              alignItems="center"
              justifyContent={isInCart(item.id) ? 'space-between' : 'flex-end'}
              spacing={2}
              sx={styles.quantityControls}
            >
              {isInCart(item.id) ? (
                <>
                  <Grid>
                    <IconButton
                      onClick={() => decrementQuantity(item.id)}
                      color="error"
                      sx={styles.iconButton(theme)}
                    >
                      {quantity === 1 ? <Delete /> : <Remove />}
                    </IconButton>
                  </Grid>

                  <Grid>
                    <Typography variant="body1">{quantity}</Typography>
                  </Grid>

                  <Grid>
                    <IconButton
                      onClick={() => incrementQuantity(item.id)}
                      color="secondary"
                      sx={styles.iconButton(theme)}
                    >
                      <Add />
                    </IconButton>
                  </Grid>
                </>
              ) : (
                <Button
                  variant="contained"
                  onClick={() => addToCart(item)}
                  sx={styles.addButton(matchesXs)}
                >
                  <ShoppingCart color="inherit" />
                </Button>
              )}
            </Grid>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};
