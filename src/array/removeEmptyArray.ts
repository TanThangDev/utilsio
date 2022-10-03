export const removeEmptyArray = (array: any[]) => {
  const newArray: any[] = [];
  for (const key in array) {
    if (array[key]) newArray.push(array[key]);
  }
  return newArray;
};
