import { capitalizeFirstLetter } from './capitalizeFirstLetter';

export function capitalizeEachWord(text: string): string {
  if (!text) return '';
  return text
    .split(' ')
    .map((word) => capitalizeFirstLetter(word))
    .join(' ');
}
