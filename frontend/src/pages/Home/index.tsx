import { useEffect, useState } from 'react';

import { Box, Grid2 as Grid, Grow } from '@mui/material';

import { Cart } from 'components/Cart';
import { CartButton } from 'components/CartButton';
import { CustomizeBurgerModal } from 'components/CostumizeBurgerModal';
import { Footer, Header, Navigation } from 'components/Layout';
import { MenuHint } from 'components/MenuHint';
import { ProductCard } from 'components/Product';
import { WelcomeModal } from 'components/WelcomeModal';

import { useLanguage } from 'utils/hooks/useLanguage';
import { useCart } from 'utils/hooks/products/useCart';
import { useProducts } from 'utils/hooks/products/useProducts';
import { IProducts } from 'utils/interfaces';
import { OrderSuccessModal } from '@/components/OrderSuccessModal';

export const Home = () => {
  const { language } = useLanguage();
  const { products, fetchProducts, additionals, fetchAdditionals } = useProducts();
  const { totalQuantity, addToCart } = useCart();

  const [category, setCategory] = useState(1);
  const [customizeOpen, setCustomizeOpen] = useState(false);
  const [orderSuccessOpen, setOrderSuccessOpen] = useState(false);
  const [search, setSearch] = useState('');
  const [selectedProduct, setSelectedProduct] = useState<IProducts>({} as IProducts);
  const [showHint, setShowHint] = useState(false);

  useEffect(() => {
    fetchProducts(category);
    if (category === 1) {
      fetchAdditionals();
    }
  }, [category]);

  const filteredProducts = products.filter((product: IProducts) => {
    if (language === 'pt') {
      return product?.namePt?.toLowerCase().includes(search.toLowerCase());
    } else {
      return product?.nameEn?.toLowerCase().includes(search.toLowerCase());
    }
  });

  return (
    <Box display="flex" flexDirection="column">
      <WelcomeModal onFinish={() => setShowHint(true)} />
      {showHint && <MenuHint />}
      <Header setSearch={setSearch} />
      <Navigation setCategory={setCategory} category={category} />
      {totalQuantity > 0 && <CartButton />}
      <Cart onOrderSuccess={() => setOrderSuccessOpen(true)} />
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
                key={item.id}
                category={category}
                item={item}
                setCustomizeOpen={setCustomizeOpen}
                setSelectedProduct={setSelectedProduct}
              />
            </Grid>
          </Grow>
        ))}
      </Grid>
      <Footer />

      <CustomizeBurgerModal
        open={customizeOpen}
        product={selectedProduct}
        additionals={additionals}
        onClose={() => {
          fetchAdditionals();
          setCustomizeOpen(false);
        }}
        onConfirm={addToCart}
      />

      <OrderSuccessModal open={orderSuccessOpen} onClose={() => setOrderSuccessOpen(false)} />
    </Box>
  );
};
