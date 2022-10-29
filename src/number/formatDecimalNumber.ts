import { regexIndexOf } from '../regex/regexIndexOf';

export const formatDecimalNumber = (money: number, length = 0): number => {
  let decimal = length ? length : 2;
  let value = '';
  if (money < 0.000009)
    value = Number(money).toFixed(20).toString().replace(/,/g, '');
  else value = money?.toString().replace(/,/g, '');
  try {
    // tslint:disable-next-line:prefer-const
    let [left, right] = value.split('.');
    if (!right) return parseInt(value, 10);

    const index = regexIndexOf(right, /[1-9]/, '');
    if (index) decimal = index + decimal;
    if (parseInt(left, 10) > 0) {
      const data = Number(value).toFixed(length ? length : 2);
      return Number(data);
    }
    const roundPow = Math.pow(10, decimal);
    const result = parseFloat(value);
    const rounding =
      Math.round((result + Number.EPSILON) * roundPow) / roundPow;
    return rounding;
  } catch (_) {
    return money;
  }
};
