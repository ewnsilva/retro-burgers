import {
  Typography,
  Button,
  Card,
  CardMedia,
  CardContent,
  Grid2 as Grid,
} from "@mui/material";

type ProductProps = {
  image: string;
  name: string;
  description: string;
  price: number;
};

export const ProductCard: React.FC<ProductProps> = ({
  image,
  name,
  description,
  price,
}) => {
  return (
    <Card sx={{ height: 450, display: "flex", flexDirection: "column" }}>
      <CardMedia component="img" height="140" image={image} alt={name} />
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
              {name}
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
              {description}
            </Typography>
          </Grid>
          <Grid display={"flex"} flexDirection={"column"}>
            <Typography variant="h6" color="text.primary" sx={{ mt: 2 }}>
              ${price.toFixed(2)}
            </Typography>
            <Button variant="contained" color="primary" sx={{ mt: 2 }}>
              Comprar
            </Button>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};
