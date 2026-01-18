import { Box, Grid2 as Grid, Grow, CircularProgress } from '@mui/material';

import { Cart } from 'components/Cart';
import { CartButton } from 'components/CartButton';
import { CustomizeBurgerModal } from 'components/CostumizeBurgerModal';
import { Footer, Header, Navigation } from 'components/Layout';
import { MenuHint } from 'components/MenuHint';
import { ProductCard } from 'components/Product';
import { WelcomeModal } from 'components/WelcomeModal';
import { OrderSuccessModal } from 'components/OrderSuccessModal';

import { useHomeLogic } from './Home.logic';

export const Home = () => {
  const {
    categories,
    category,
    showLoading,
    customizeOpen,
    filteredProducts,
    orderSuccessOpen,
    selectedProduct,
    showHint,
    totalQuantity,
    addToCart,
    setCategory,
    setCustomizeOpen,
    setOrderSuccessOpen,
    setSearch,
    setSelectedProduct,
    setShowHint,
  } = useHomeLogic();

  return (
    <Box display="flex" flexDirection="column">
      <WelcomeModal onFinish={() => setShowHint(true)} />
      {showHint && <MenuHint />}

      <Header setSearch={setSearch} />
      <Navigation setCategory={setCategory} category={category} categories={categories} />

      {totalQuantity > 0 && <CartButton />}
      <Cart onOrderSuccess={() => setOrderSuccessOpen(true)} />

      {showLoading ? (
        <Box display="flex" justifyContent="center" alignItems="center" height="50vh">
          <CircularProgress size={150} />
        </Box>
      ) : (
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
    </Box>
  );
};
