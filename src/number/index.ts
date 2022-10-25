export * from './formatDecimalNumber';
export const isNumber = (value: any): boolean => {
  return typeof value === 'number' && !isNaN(value);
};
