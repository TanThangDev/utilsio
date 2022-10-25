export function shortenString(
  value: string,
  chars = 4,
  hasEnd = true,
  hasDot = true,
): string {
  if (value.length <= chars * 2 + 3) return value;
  const end = hasEnd ? value.slice(-chars) : '';
  const start = value.slice(0, chars);
  return `${start}${hasDot ? '...' : ''}${end}`;
}
