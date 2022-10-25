import { regexIndexOf } from 'regex/regexIndexOf';
import { formatMoney } from '../money/formatMoney';

export const formatDecimalNumber = (money: number, length = 4): any => {
  let value = '';
  if (money < 0.000009)
    value = Number(money).toFixed(20).toString().replace(/,/g, '');
  else value = money?.toString().replace(/,/g, '');
  try {
    // tslint:disable-next-line:prefer-const
    let [left, right] = value.split('.');
    if (parseInt(left, 10) > 0) length = 2;
    if (!right) return formatMoney(value, '');
    // if (!right.startsWith('0'.repeat(length)) || parseInt(left) > 0) {
    //   right = right.slice(0, length);
    //   console.log(right);
    // } else {
    const index = regexIndexOf(right, /[1-9]/, '');
    right = right.slice(0, index + length);
    // }
    if (parseInt(right, 10) <= 0) return `${formatMoney(left, '')}`;
    return `${formatMoney(left, '')}.${right}`;
  } catch (_) {
    return money;
  }
};
