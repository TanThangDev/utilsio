import { formatDecimalNumber } from '../number/formatDecimalNumber';

export const formatShortMoney = (money = 0): string => {
  if (!money) return '0';
  if (money < 1000) return formatDecimalNumber(money).toString();

  if (money / 1000 >= 1 && money / 1000 < 1000)
    return `${(money / 1000).toFixed(2)}K`;
  if (money / 1000 >= 1000 && money / 1000 < 1000000)
    return `${(money / 1000000).toFixed(2)}M`;
  if (money / 1000 >= 1000000) return `${(money / 1000000000).toFixed(2)}B`;
  return '0';
};
