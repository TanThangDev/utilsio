import { transformBoolean } from './transform.boolean';
import { transformObject } from './transform.object';

export const transformArray = (
  value: string | any[] | null,
  type = 'string',
): any[] => {
  if (!value) return [];
  let newValue = value;
  if (typeof value === 'string') {
    try {
      newValue = JSON.parse(value || '[]');
    } catch (error) {
      newValue = value.split(',');
    }
  }
  if (Array.isArray(newValue)) {
    switch (type) {
      case 'boolean':
        return newValue.map((item) => transformBoolean(item));

      case 'number':
        return newValue.map((item) => parseFloat(item));

      case 'string':
        return newValue.map((el) => el.toString());

      case 'object':
        return newValue.map((item) => transformObject(item));

      case 'array':
        return newValue.map((item) => transformArray(item));

      default:
        return newValue;
    }
  }
  return [];
};
