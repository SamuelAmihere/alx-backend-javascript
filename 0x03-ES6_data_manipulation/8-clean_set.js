export default function cleanSet(set, startString) {
  if (!(set instanceof Set)) {
    throw new Error('First argument is not a Set');
  }
  if (typeof startString !== 'string') {
    throw new Error('Second argument is not a string');
  }
  return [...set].filter((value) => value.startsWith(startString)).join('-');
}
