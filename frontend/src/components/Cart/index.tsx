import {
  Drawer,
  IconButton,
  Typography,
  List,
  ListItem,
  ListItemText,
  Button,
  Divider,
  Paper,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

import { useCart } from "hooks";

export const Cart = (): JSX.Element => {
  const {
    cartItems,
    removeItem,
    incrementQuantity,
    decrementQuantity,
    isDrawerOpen,
    setIsDrawerOpen,
    totalQuantity,
    updateValue,
  } = useCart();

  const closeDrawer = () => {
    setIsDrawerOpen(false);
  };

  const handleOpenModal = () => {
    closeDrawer();
  };

  return (
    <Drawer anchor="right" open={isDrawerOpen} onClose={closeDrawer}>
      <div style={{ width: 350, padding: "16px" }}>
        <Typography variant="h5" gutterBottom>
          Carrinho
        </Typography>

        {cartItems?.length > 0 && (
          <List>
            {cartItems.map((item) => (
              <Paper elevation={5} sx={{ mb: 1 }}>
                <ListItem key={item.id}>
                  <ListItemText primary={item.name} />
                  <div style={{ display: "flex", alignItems: "center" }}>
                    {item.quantity === 1 ? (
                      <IconButton
                        color="error"
                        onClick={() => removeItem(item.id)}
                      >
                        <DeleteIcon />
                      </IconButton>
                    ) : (
                      <IconButton
                        color="error"
                        onClick={() => decrementQuantity(item.id)}
                      >
                        <RemoveIcon />
                      </IconButton>
                    )}
                    <Typography variant="body1" style={{ margin: "0 8px" }}>
                      {item.quantity}
                    </Typography>
                    <IconButton
                      color="primary"
                      onClick={() => incrementQuantity(item.id)}
                    >
                      <AddIcon />
                    </IconButton>
                  </div>
                </ListItem>
              </Paper>
            ))}
          </List>
        )}

        <Divider />

        <div style={{ marginTop: 16 }}>
          <Typography variant="subtitle1">
            Quantidade Total: {totalQuantity}
          </Typography>
          <Typography variant="subtitle1">
            Valor Total: {updateValue()}
          </Typography>
        </div>

        <Button
          variant="contained"
          color="primary"
          fullWidth
          style={{ marginTop: 16 }}
          onClick={handleOpenModal}
        >
          Comprar
        </Button>
      </div>
    </Drawer>
  );
};
