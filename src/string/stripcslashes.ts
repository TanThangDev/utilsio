export const stripcslashes = (text: string): any => {
  const renderedString = text.replace(/\\./g, (match) => {
    return new Function('return "' + match + '"')() || match;
  });
  return renderedString;
};
