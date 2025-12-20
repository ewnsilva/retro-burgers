import { useEffect, useState } from 'react';

import { Box, Grid2 as Grid, Grow } from '@mui/material';

import {
  Cart,
  CartButton,
  Footer,
  Header,
  MenuHint,
  Navigation,
  ProductCard,
  WelcomeModal,
} from 'components';
import { useCart, useProducts, IProducts, useLanguage } from 'utils';

export const Home = () => {
  const { totalQuantity } = useCart();
  const { products, fetchProducts } = useProducts();
  const { language } = useLanguage();

  const [search, setSearch] = useState('');
  const [category, setCategory] = useState(0);
  const [showHint, setShowHint] = useState(false);

  useEffect(() => {
    fetchProducts(category);
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
      <Cart />
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
              <ProductCard key={item.id} item={item} />
            </Grid>
          </Grow>
        ))}
      </Grid>
      <Footer />
    </Box>
  );
};
