export const getDiscountedPrice = (currentPrice: number, discount: number) => {
  if (discount < 0 || discount > 100) return currentPrice;
  const discountedPrice = currentPrice - currentPrice * (discount / 100);
  return discountedPrice;
};
