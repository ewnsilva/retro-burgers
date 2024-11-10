import { useState } from "react";

import { Box, Grid2 as Grid } from "@mui/material";

import { Cart, Header, Navigation, ProductCard, CartButton } from "components";
import { useCart } from "hooks";
import { ProductMock } from "utils";

export const Home = () => {
  const { totalQuantity } = useCart();
  const [search, setSearch] = useState("");

  const filteredProducts = ProductMock.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Box display="flex" flexDirection={"column"}>
      <Header setSearch={setSearch} />
      <Navigation />
      {totalQuantity > 0 && <CartButton />}
      <Cart />
      <Grid
        container
        rowSpacing={2}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        marginX={"15%"}
      >
        {filteredProducts.map((item) => (
          <Grid key={item.id} size={3}>
            <ProductCard item={item} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
