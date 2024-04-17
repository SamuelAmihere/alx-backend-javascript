export default function hasValuesFromArray(set, arr) {
  if (!Array.isArray(arr)) {
    throw new Error('Argument is not an array');
  }
  return arr.every((value) => set.has(value));
}
