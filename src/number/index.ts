export * from './formatDecimalNumber';
export * from './math';
export const isNumber = (value: any): boolean => {
  return typeof value === 'number' && !isNaN(value);
};
