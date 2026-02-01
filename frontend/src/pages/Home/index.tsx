import {
  Box,
  CircularProgress,
  Grid2 as Grid,
  Grow,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';

import { Cart } from 'components/Cart';
import { CartButton } from 'components/CartButton';
import { CustomizeBurgerModal } from 'components/CostumizeBurgerModal';
import { Footer, Header, Navigation } from 'components/Layout';
import { MenuHint } from 'components/MenuHint';
import { OrderSuccessModal } from 'components/OrderSuccessModal';
import { ProductCard } from 'components/Product';
import { ScrollToTopButton } from 'components/ScrollToTopButton';
import { WelcomeModal } from 'components/WelcomeModal';

import { useHomeLogic } from './Home.logic';
import { useLanguage } from '@/utils/hooks/useLanguage';

export const Home = () => {
  const { t } = useLanguage();
  const {
    categories,
    category,
    customizeOpen,
    filteredProducts,
    hasNoResults,
    orderSuccessOpen,
    selectedProduct,
    showHint,
    showLoading,
    totalQuantity,
    addToCart,
    setCategory,
    setCustomizeOpen,
    setOrderSuccessOpen,
    setSearch,
    setSelectedProduct,
    setShowHint,
  } = useHomeLogic();

  const theme = useTheme();
  const matchesSm = useMediaQuery('(max-width:900px)');

  return (
    <Box display="flex" flexDirection="column">
      <WelcomeModal onFinish={() => setShowHint(true)} />
      {showHint && <MenuHint />}
      {matchesSm && <Box height={180} />}

      <Box
        sx={{
          position: matchesSm ? 'fixed' : 'static',
          top: 0,
          left: 0,
          width: '100%',
          zIndex: theme.zIndex.appBar,
        }}
      >
        <Header setSearch={setSearch} />
        <Navigation setCategory={setCategory} category={category} categories={categories} />
      </Box>

      {totalQuantity > 0 && <CartButton />}
      <Cart onOrderSuccess={() => setOrderSuccessOpen(true)} />

      {showLoading && (
        <Box display="flex" justifyContent="center" alignItems="center" height="50vh">
          <CircularProgress size={150} />
        </Box>
      )}

      {!showLoading && hasNoResults && (
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          height="50vh"
          textAlign="center"
        >
          <Box>
            <Typography variant="h5" fontWeight={600}>
              {t('home.noResults.title')}
            </Typography>
            <Typography variant="body1" color="text.secondary" mt={1}>
              {t('home.noResults.description')}
            </Typography>
          </Box>
        </Box>
      )}

      {!showLoading && !hasNoResults && (
        <Grid
          container
          rowSpacing={2}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          marginX="10%"
          alignSelf="center"
          maxWidth={1150}
          pb={10}
        >
          {filteredProducts.map((item, index) => (
            <Grow in timeout={400 + index * 80} key={item.id}>
              <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
                <ProductCard
                  item={item}
                  setCustomizeOpen={setCustomizeOpen}
                  setSelectedProduct={setSelectedProduct}
                />
              </Grid>
            </Grow>
          ))}
        </Grid>
      )}

      <Footer />

      <CustomizeBurgerModal
        open={customizeOpen}
        product={selectedProduct}
        additionals={selectedProduct.additionals}
        onClose={() => {
          setCustomizeOpen(false);
        }}
        onConfirm={addToCart}
      />

      <OrderSuccessModal open={orderSuccessOpen} onClose={() => setOrderSuccessOpen(false)} />

      <ScrollToTopButton />
    </Box>
  );
};
