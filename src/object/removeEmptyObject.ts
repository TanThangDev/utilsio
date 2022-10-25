import { IObject } from '../interface';

export const removeEmptyObject = (object: IObject) => {
  const result = {};
  Object.keys(object).forEach((key) => {
    if (object[key]) result[key] = object[key];
  });
  return result;
};
