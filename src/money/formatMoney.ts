export const formatMoney = (amount: string, ext = '$'): string => {
  const value = amount ? parseInt(amount, 10) : 0;
  return value.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,') + ext;
};
