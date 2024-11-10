import { ShoppingCart } from "@mui/icons-material";
import { Badge, IconButton } from "@mui/material";

import { useCart } from "hooks";

export const CartButton = (): JSX.Element => {
  const { setIsDrawerOpen, totalQuantity } = useCart();

  const openDrawer = () => {
    setIsDrawerOpen(true);
  };

  return (
    <IconButton
      color="inherit"
      onClick={openDrawer}
      style={{ position: "fixed", top: "15%", right: 16 }}
    >
      <Badge badgeContent={totalQuantity} color="secondary">
        <ShoppingCart />
      </Badge>
    </IconButton>
  );
};
