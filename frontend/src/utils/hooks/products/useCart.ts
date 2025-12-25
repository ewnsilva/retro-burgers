import { useContext } from 'react';
import { CartContext, CartContextProps } from 'utils/context/CartContext';

export const useCart = (): CartContextProps => useContext(CartContext);
