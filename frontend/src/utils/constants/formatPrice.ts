export const formatPrice = (value: number, language: string) => {
  return new Intl.NumberFormat(language === 'pt' ? 'pt-BR' : 'en-US', {
    style: 'currency',
    currency: language === 'pt' ? 'BRL' : 'USD',
  }).format(value);
};
