export function capitalizeFirstLetter(text: string): string {
  if (!text) return '';
  text = text.toLowerCase();
  return text.charAt(0).toUpperCase() + text.slice(1);
}
