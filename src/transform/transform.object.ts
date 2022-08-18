export const transformObject = (value: string | any | null): any => {
  if (!value) return null;
  if (typeof value === 'object' && value !== null) return value;
  if (typeof value === 'string') return JSON.parse(value);
  return null;
};
