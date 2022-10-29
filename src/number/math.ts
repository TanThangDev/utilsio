import BigNumber from 'bignumber.js';

export function addNumber(a: number, b: number): number {
  const bignumberA = new BigNumber(a);
  const bignumberB = new BigNumber(b);
  return bignumberA.plus(bignumberB).toNumber();
}

export function subNumber(a: number, b: number): number {
  const bignumberA = new BigNumber(a);
  const bignumberB = new BigNumber(b);
  return bignumberA.minus(bignumberB).toNumber();
}

export function mulNumber(a: number, b: number): number {
  const bignumberA = new BigNumber(a);
  const bignumberB = new BigNumber(b);
  return bignumberA.multipliedBy(bignumberB).toNumber();
}

export function divNumber(a: number, b: number): number {
  const bignumberA = new BigNumber(a);
  const bignumberB = new BigNumber(b);
  return bignumberA.dividedBy(bignumberB).toNumber();
}

export function modNumber(a: number, b: number): number {
  const bignumberA = new BigNumber(a);
  const bignumberB = new BigNumber(b);
  return bignumberA.modulo(bignumberB).toNumber();
}

export function powNumber(a: number, b: number): number {
  const bignumberA = new BigNumber(a);
  const bignumberB = new BigNumber(b);
  return bignumberA.exponentiatedBy(bignumberB).toNumber();
}

export function sqrtNumber(a: number): number {
  const bignumberA = new BigNumber(a);
  return bignumberA.squareRoot().toNumber();
}

export function absNumber(a: number): number {
  const bignumberA = new BigNumber(a);
  return bignumberA.absoluteValue().toNumber();
}

export function ceilNumber(a: number): number {
  const bignumberA = new BigNumber(a);
  return bignumberA.integerValue(BigNumber.ROUND_CEIL).toNumber();
}

export function floorNumber(a: number): number {
  const bignumberA = new BigNumber(a);
  return bignumberA.integerValue(BigNumber.ROUND_FLOOR).toNumber();
}

export function roundNumber(a: number): number {
  const bignumberA = new BigNumber(a);
  return bignumberA.integerValue(BigNumber.ROUND_HALF_UP).toNumber();
}

export function truncNumber(a: number): number {
  const bignumberA = new BigNumber(a);
  return bignumberA.integerValue(BigNumber.ROUND_DOWN).toNumber();
}

export function getRootPrice(price: number, percent = 1): number {
  const bignumberPrice = new BigNumber(price);
  const bignumberPercent = new BigNumber(percent);
  const rootPercent = new BigNumber(100).minus(bignumberPercent);
  const perPricePercent = bignumberPrice.dividedBy(rootPercent);
  return perPricePercent.multipliedBy(100).toNumber();
}

export function zeroPad(num: number, length: number): string {
  return num.toString().padStart(length, '0');
}
