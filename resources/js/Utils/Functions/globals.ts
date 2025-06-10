// export function ucfirst(str: string): string {
//   if (!str) return str; // si la chaîne est vide, on la retourne telle quelle
//   return str.charAt(0).toUpperCase() + str.slice(1);
// }

export function ucfirst(text: string): string {
  const trimmed = text.trim();
  if (!trimmed) return "";
  return trimmed.charAt(0).toUpperCase() + trimmed.slice(1);
}

export function pluralize(word: string, count: number, pluralForm?: string): string {
  if (count === 1) return word;
  return pluralForm ?? word + "s";
}
