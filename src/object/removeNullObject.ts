import { IObject } from 'interface';

export const removeNullObject = (object: IObject): IObject => {
  const newObject = { ...object };
  for (const key in object) {
    if (object[key] === null || object[key] === undefined)
      delete newObject[key];
  }
  return newObject;
};
