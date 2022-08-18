export const transformBoolean = (value: string | boolean | number): boolean => {
  if (!value) return false;
  if (typeof value === 'boolean') return value;
  if (typeof value === 'string') return value === 'true' ? true : false;
  if (typeof value === 'number') return value === 1 ? true : false;
  return false;
};
