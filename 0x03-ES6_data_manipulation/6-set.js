export default function setFromArray(arr) {
  if (!Array.isArray(arr)) {
    throw new Error('Argument is not an array');
  }
  return new Set(arr);
}
