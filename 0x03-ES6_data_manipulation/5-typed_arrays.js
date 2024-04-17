export default function createInt8TypedArray(length, position, value) {
  if (position < 0 || position >= length || length <= 0) {
    throw new Error('Position outside range');
  }
  const buffer = new ArrayBuffer(length);
  const view = new Int8Array(buffer);
  if (position >= view.length) {
    throw new Error('Position outside range');
  }
  view[position] = value;
  return buffer;
}
