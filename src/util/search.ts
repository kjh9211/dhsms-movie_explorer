export function search(query: string, array: object) {
  if (!Array.isArray(array)) return [];
  return array.filter(d => d.includes(query));
}