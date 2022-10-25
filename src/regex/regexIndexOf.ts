export const regexIndexOf = (text: string, regex: RegExp, startpos: any) => {
  const indexOf = text.substring(startpos || 0).search(regex);
  return indexOf >= 0 ? indexOf + (startpos || 0) : indexOf;
};
