import { IObject } from '../interface';

export const uniqueObject = (object: IObject): IObject => {
  const result = {};
  Object.keys(object).forEach((key) => {
    if (!result[key]) result[key] = object[key];
  });
  return result;
};
