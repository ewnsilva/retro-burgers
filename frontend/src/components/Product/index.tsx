import { useState, useMemo } from 'react';
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Grid2 as Grid,
  IconButton,
  Skeleton,
  Tooltip,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { Add, BrokenImage, Delete, LunchDining, Remove, ShoppingCart } from '@mui/icons-material';

import { useLanguage } from 'utils/hooks/useLanguage';
import { useCart } from 'utils/hooks/products/useCart';
import { IProductsList } from 'utils/interfaces';

import * as styles from './Product.styles';

export const ProductCard: React.FC<IProductsList> = ({
  item,
  setCustomizeOpen,
  setSelectedProduct,
}) => {
  const { language, t } = useLanguage();
  const theme = useTheme();
  const matchesXs = useMediaQuery('(max-width: 465px)');

  const { addToCart, isInCart, incrementQuantity, decrementQuantity, cartItems } = useCart();

  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  const cartItem = useMemo(
    () => cartItems.find(cartItem => cartItem.id === item.id),
    [cartItems, item.id]
  );

  const quantity = useMemo(() => cartItem?.quantity ?? 0, [cartItem]);

  const name = language === 'pt' ? item.title?.pt : item.title?.en;
  const description = language === 'pt' ? item.description?.pt : item.description?.en;
  const price = language === 'pt' ? Number(item.price?.brl) : Number(item.price?.usd);

  return (
    <Card sx={styles.card}>
      <CardContent>
        <Grid container display="flex" direction="column" spacing={1} sx={styles.cardContent}>
          <Grid>
            <Typography gutterBottom variant="h6" component="div" sx={styles.title}>
              {name}
            </Typography>
          </Grid>

          <Box sx={{ position: 'relative' }}>
            {!imageLoaded && !imageError && (
              <Skeleton
                variant="rectangular"
                sx={{
                  ...styles.image,
                  opacity: imageLoaded ? 1 : 0,
                  position: 'absolute',
                  top: 0,
                  left: 0,
                }}
              />
            )}

            {!imageError && (
              <CardMedia
                component="img"
                image={item.logo}
                alt={language === 'pt' ? item.title?.pt : item.title?.en}
                sx={{
                  ...styles.image,
                  opacity: imageLoaded ? 1 : 0,
                  display: imageLoaded ? 'block' : 'none',
                }}
                onLoad={() => setImageLoaded(true)}
                onError={() => {
                  setImageError(true);
                  setImageLoaded(true);
                }}
              />
            )}

            {imageError && (
              <Box
                sx={{
                  ...styles.image,
                  opacity: imageLoaded ? 1 : 0,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: 'action.hover',
                }}
              >
                <BrokenImage
                  sx={{
                    fontSize: 48,
                    color: 'text.secondary',
                  }}
                />
              </Box>
            )}
          </Box>

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
              {Number(price).toFixed(2)}
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
                <Box sx={styles.buttonBox(matchesXs)}>
                  <Tooltip title={t('cart.includeAdditionals')} arrow>
                    <Button
                      variant="outlined"
                      onClick={() => {
                        setSelectedProduct(item);
                        setCustomizeOpen(true);
                      }}
                      size={matchesXs ? 'medium' : 'small'}
                      color="inherit"
                      sx={styles.personalizeButton(matchesXs)}
                    >
                      <LunchDining />
                    </Button>
                  </Tooltip>
                  <Button
                    variant="contained"
                    onClick={() => addToCart(item)}
                    size="medium"
                    sx={styles.addButton(matchesXs)}
                  >
                    <ShoppingCart color="inherit" />
                  </Button>
                </Box>
              )}
            </Grid>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};
