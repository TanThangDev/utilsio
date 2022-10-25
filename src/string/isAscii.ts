export const isAscii = (text: string): boolean => /^[\x00-\x7F]*$/.test(text);
