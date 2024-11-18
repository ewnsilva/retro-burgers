import {
  Drawer,
  IconButton,
  Typography,
  List,
  Button,
  Divider,
  Paper,
  Box,
  Badge,
  CardMedia,
} from "@mui/material";
import { Delete, Add, Remove } from "@mui/icons-material";

import { useCart } from "hooks";
import { ShoppingCart } from "@mui/icons-material";

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
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: 350,
          height: "100%",
          backgroundColor: "#fff4e0",
        }}
      >
        <Box
          display={"flex"}
          width={"90%"}
          m={2}
          justifyContent={"space-between"}
        >
          <Box display={"flex"} alignItems={"center"}>
            <Badge
              badgeContent={totalQuantity}
              color="secondary"
              sx={{ color: "white" }}
            >
              <ShoppingCart
                sx={{
                  backgroundColor: "primary.main",
                  p: 1.5,
                  borderRadius: 2,
                }}
              />
            </Badge>
            <Typography variant="h5" ml={2}>
              Carrinho
            </Typography>
          </Box>
          <Typography
            onClick={closeDrawer}
            sx={{
              border: "2px solid #FA558A",
              alignSelf: "top",
              fontSize: 12,
              fontWeight: 600,
              height: 18,
              width: 18,
              borderRadius: 5,
              textAlign: "center",
              color: "primary.main",
              "&:hover": {
                cursor: "pointer",
                backgroundColor: "primary.main",
                color: "white",
              },
            }}
          >
            X
          </Typography>
        </Box>

        {cartItems?.length > 0 && (
          <List sx={{ width: "90%", alignSelf: "center" }}>
            {cartItems.map((item) => (
              <Paper
                elevation={5}
                sx={{
                  mb: 1,
                  backgroundColor: "info.main",
                  border: "1.2px solid #250f40",
                }}
              >
                <Box
                  key={item.id}
                  sx={{ display: "flex", alignItems: "top", p: 1.5 }}
                >
                  <Box display={"flex"} flexDirection={"column"}>
                    <CardMedia
                      component="img"
                      height="70"
                      image={item.image}
                      alt={item.name}
                    />
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        border: "1px solid #250f40",
                        borderRadius: 1,
                        mt: 1,
                      }}
                    >
                      {item.quantity === 1 ? (
                        <Box
                          color="error"
                          onClick={() => removeItem(item.id)}
                          sx={{
                            py: 0,
                            px: 1,
                            backgroundColor: "secondary.main",
                            borderTopLeftRadius: 5,
                            borderBottomLeftRadius: 5,
                            border: "1px solid transparent",
                            borderRightColor: "#250f40",
                            "&:hover": {
                              cursor: "pointer",
                            },
                          }}
                        >
                          <Delete
                            sx={{
                              width: 15,
                            }}
                          />
                        </Box>
                      ) : (
                        <Box
                          color="error"
                          onClick={() => decrementQuantity(item.id)}
                          sx={{
                            py: 0,
                            px: 1,
                            backgroundColor: "secondary.main",
                            borderTopLeftRadius: 5,
                            borderBottomLeftRadius: 5,
                            border: "1px solid transparent",
                            borderRightColor: "#250f40",
                            "&:hover": {
                              cursor: "pointer",
                            },
                          }}
                        >
                          <Remove sx={{ width: 15 }} />
                        </Box>
                      )}
                      <Typography variant="body1" sx={{ px: 1.5 }}>
                        {item.quantity}
                      </Typography>
                      <Box
                        color="primary"
                        onClick={() => incrementQuantity(item.id)}
                        sx={{
                          py: 0,
                          px: 1,
                          backgroundColor: "secondary.main",
                          borderTopRightRadius: 5,
                          borderBottomRightRadius: 5,
                          border: "1px solid transparent",
                          borderLeftColor: "#250f40",
                          "&:hover": {
                            cursor: "pointer",
                          },
                        }}
                      >
                        <Add sx={{ width: 15 }} />
                      </Box>
                    </Box>
                  </Box>
                  <Box ml={2} width={"100%"}>
                    <Box display={"flex"} justifyContent={"space-between"}>
                      <Typography
                        fontSize={14}
                        fontWeight={600}
                        sx={{ color: "#250f40" }}
                      >
                        {item.name}
                      </Typography>
                      <IconButton
                        color="primary"
                        size="small"
                        onClick={() => removeItem(item.id)}
                        sx={{ p: 0 }}
                      >
                        <Delete sx={{ width: 20, p: 0 }} />
                      </IconButton>
                    </Box>
                    <Typography fontSize={12} color="secondary">
                      R${item.price}
                    </Typography>
                  </Box>
                </Box>
              </Paper>
            ))}
          </List>
        )}

        <Divider />
        <Box
          display={"flex"}
          flexDirection={"column"}
          alignSelf={"center"}
          position={"absolute"}
          bottom={"2%"}
          width={"90%"}
        >
          <Typography
            variant="subtitle1"
            color="primary"
            fontWeight={600}
            alignSelf={"end"}
          >
            Total: {updateValue()}
          </Typography>
          <Box alignSelf={"end"}>
            <Button
              variant="contained"
              color="primary"
              style={{ marginTop: 16 }}
            >
              Limpar
            </Button>

            <Button
              variant="contained"
              style={{ marginTop: 16 }}
              onClick={handleOpenModal}
              sx={{ ml: 1.5, backgroundColor: "#250f40" }}
            >
              Fazer Pedido
            </Button>
          </Box>
        </Box>
      </div>
    </Drawer>
  );
};
