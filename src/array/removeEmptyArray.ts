export const removeEmptyArray = (array: any[]) => {
  const newArray = [...array];
  for (const key in array) {
    if (array[key] === null || array[key] === undefined)
      newArray.splice(Number(key), 1);
  }
  return newArray;
};
