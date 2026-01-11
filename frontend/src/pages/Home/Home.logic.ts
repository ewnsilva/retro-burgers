import { useEffect, useState } from 'react';

import { useLanguage } from 'utils/hooks/useLanguage';
import { useCart } from 'utils/hooks/products/useCart';
import { useProducts } from 'utils/hooks/products/useProducts';
import { IProducts } from 'utils/interfaces';

export const useHomeLogic = () => {
  const { language } = useLanguage();
  const { products, fetchProducts, additionals, fetchAdditionals } = useProducts();
  const { totalQuantity, addToCart } = useCart();

  const [category, setCategory] = useState(1);
  const [customizeOpen, setCustomizeOpen] = useState(false);
  const [orderSuccessOpen, setOrderSuccessOpen] = useState(false);
  const [search, setSearch] = useState('');
  const [selectedProduct, setSelectedProduct] = useState<IProducts>({} as IProducts);
  const [showHint, setShowHint] = useState(false);

  useEffect(() => {
    fetchProducts(category);
    if (category === 1) {
      fetchAdditionals();
    }
  }, [category]);

  const filteredProducts = products.filter((product: IProducts) => {
    if (language === 'pt') {
      return product?.namePt?.toLowerCase().includes(search.toLowerCase());
    }
    return product?.nameEn?.toLowerCase().includes(search.toLowerCase());
  });

  return {
    filteredProducts,
    additionals,
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
    fetchAdditionals,
  };
};
