import {
  Typography,
  Button,
  Card,
  CardMedia,
  CardContent,
  Grid2 as Grid,
} from "@mui/material";

import { IProductsList } from "context";
import { useCart } from "hooks";

export const ProductCard: React.FC<IProductsList> = ({ item }) => {
  const { addToCart, cartItems } = useCart();
  return (
    <Card sx={{ height: 450, display: "flex", flexDirection: "column" }}>
      <CardMedia
        component="img"
        height="140"
        image={item.image}
        alt={item.name}
      />
      <CardContent
        sx={{ flexGrow: 1, display: "flex", flexDirection: "column" }}
      >
        <Grid container direction="column" spacing={1}>
          <Grid>
            <Typography
              gutterBottom
              variant="h6"
              component="div"
              sx={{ fontSize: { xs: "0.8rem", sm: "1rem" }, height: 35 }}
            >
              {item.name}
            </Typography>
          </Grid>
          <Grid>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{
                fontSize: { xs: "0.75rem", sm: "0,9rem" },
                height: 70,
                my: 2,
              }}
            >
              {item.description}
            </Typography>
          </Grid>
          <Grid display={"flex"} flexDirection={"column"}>
            <Typography variant="h6" color="text.primary" sx={{ mt: 2 }}>
              ${item.price.toFixed(2)}
            </Typography>
            <Button
              variant="contained"
              onClick={() => addToCart(item)}
              color="primary"
              sx={{ mt: 2 }}
            >
              Comprar
            </Button>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};
