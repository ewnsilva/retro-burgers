import { useEffect, useState } from 'react';

import { useLanguage } from 'utils/hooks/useLanguage';
import { useCart } from 'utils/hooks/products/useCart';
import { useProducts } from 'utils/hooks/products/useProducts';
import { IProducts } from 'utils/interfaces';

export const useHomeLogic = () => {
  const { language } = useLanguage();
  const { products, categories, fetchProducts, fetchCategories } = useProducts();
  const { totalQuantity, addToCart } = useCart();

  const [category, setCategory] = useState<number | null>(null);
  const [customizeOpen, setCustomizeOpen] = useState(false);
  const [orderSuccessOpen, setOrderSuccessOpen] = useState(false);
  const [search, setSearch] = useState('');
  const [selectedProduct, setSelectedProduct] = useState<IProducts>({} as IProducts);
  const [showHint, setShowHint] = useState(false);

  useEffect(() => {
    fetchCategories();
  }, []);

  useEffect(() => {
    if (categories.length && category === null) {
      setCategory(categories[0].id);
    }
  }, [categories]);

  useEffect(() => {
    if (category !== null) {
      fetchProducts(category);
    }
  }, [category]);

  const filteredProducts = products.filter((product: IProducts) => {
    const title = language === 'pt' ? product?.title?.pt : product?.title?.en;

    return title?.toLowerCase().includes(search.toLowerCase());
  });

  return {
    filteredProducts,
    totalQuantity,

    category,
    categories,
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
