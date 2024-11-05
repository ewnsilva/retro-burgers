import { useContext } from "react";
import { CartContext, CartContextProps } from "context";

export const useCart = (): CartContextProps => useContext(CartContext);
