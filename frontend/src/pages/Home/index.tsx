import { Box, Grid2 as Grid } from "@mui/material";
import { Header, Navigation, ProductCard } from "components";

import { ProductMock } from "utils";

export const Home = () => (
  <Box display="flex" flexDirection={"column"}>
    <Header />
    <Navigation />
    <Grid
      container
      rowSpacing={2}
      columnSpacing={{ xs: 1, sm: 2, md: 3 }}
      marginX={"10%"}
    >
      {ProductMock.map(({ description, image, name, price }) => (
        <Grid size={3}>
          <ProductCard
            description={description}
            image={image}
            name={name}
            price={price}
          />
        </Grid>
      ))}
    </Grid>
  </Box>
);
