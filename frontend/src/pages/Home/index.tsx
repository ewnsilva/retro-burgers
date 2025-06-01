import { useEffect, useState } from 'react';

import { Box, Grid2 as Grid } from '@mui/material';

import { Cart, Header, Navigation, ProductCard, CartButton, Footer } from 'components';
import { useCart, useProducts } from 'utils';
import { useCategories } from 'utils/hooks/products/useCategories';

export const Home = () => {
  const { totalQuantity } = useCart();
  const { products, fetchProducts } = useProducts();
  const { categories, fetchCategories } = useCategories();

  const [search, setSearch] = useState('');
  const [category, setCategory] = useState(0);

  useEffect(() => {
    fetchCategories();
    fetchProducts(category);
  }, [category]);

  const filteredProducts = products.filter(product =>
    product?.name?.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Box display="flex" flexDirection="column">
      <Header setSearch={setSearch} />
      <Navigation setCategory={setCategory} categories={categories} />
      {totalQuantity > 0 && <CartButton />}
      <Cart />
      <Grid
        container
        rowSpacing={2}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        marginX="10%"
        alignSelf="center"
        maxWidth={1150}
      >
        {filteredProducts.map(item => (
          <Grid key={item.id} size={3}>
            <ProductCard item={item} />
          </Grid>
        ))}
      </Grid>
      <Footer />
    </Box>
  );
};
