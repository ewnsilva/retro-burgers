import { useEffect, useState } from 'react';

import { useLanguage } from 'utils/hooks/useLanguage';
import { useCart } from 'utils/hooks/products/useCart';
import { useProducts } from 'utils/hooks/products/useProducts';
import { IProducts } from 'utils/interfaces';

export const useHomeLogic = () => {
  const { language } = useLanguage();
  const { products, fetchProducts } = useProducts();
  const { totalQuantity, addToCart } = useCart();

  const [category, setCategory] = useState(1);
  const [customizeOpen, setCustomizeOpen] = useState(false);
  const [orderSuccessOpen, setOrderSuccessOpen] = useState(false);
  const [search, setSearch] = useState('');
  const [selectedProduct, setSelectedProduct] = useState<IProducts>({} as IProducts);
  const [showHint, setShowHint] = useState(false);

  useEffect(() => {
    fetchProducts(category);
  }, [category]);

  const filteredProducts = products.filter((product: IProducts) => {
    if (language === 'pt') {
      return product?.title?.pt?.toLowerCase().includes(search.toLowerCase()) || '';
    }
    return product?.title?.en?.toLowerCase().includes(search.toLowerCase()) || '';
  });

  return {
    filteredProducts,
    totalQuantity,

    category,
    customizeOpen,
    orderSuccessOpen,
    search,
    selectedProduct,
    showHint,

    setCategory,
    setCustomizeOpen,
    setOrderSuccessOpen,
    setSearch,
    setSelectedProduct,
    setShowHint,

    addToCart,
  };
};
