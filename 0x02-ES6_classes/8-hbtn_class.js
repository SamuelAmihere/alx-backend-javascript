export default class HolbertonClass {
  constructor(size, location) {
    if (typeof size !== 'number') throw new TypeError('size must be a number');
    if (typeof location !== 'string') throw new TypeError('location must be a string');
    this._size = size;
    this._location = location;
  }

  [Symbol.toPrimitive](cast) {
    if (cast === 'number') return this._size;
    if (cast === 'string') return this._location;
    return null;
  }
}
