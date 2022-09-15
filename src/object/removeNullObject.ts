import { IObject } from 'interface';

export const removeNullObject = (object: IObject) => {
  const result = {};
  Object.keys(object).forEach((key) => {
    if (object[key] !== null) result[key] = object[key];
  });
  return result;
};
