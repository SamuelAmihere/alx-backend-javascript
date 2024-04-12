export default class Building {
  constructor(sqft) {
    if (typeof sqft !== 'number') {
      throw TypeError('sqft must be a number');
    }
    this._sqft = sqft;
    if (this.constructor === Building) {
      if (this.evacuationWarningMessage !== 'function') {
        throw Error('Class extending Building must override evacuationWarningMessage');
      }
    }
  }

  get sqft() {
    return this._sqft;
  }

  set sqft(value) {
    if (typeof value !== 'number') {
      throw TypeError('sqft must be a number');
    }
    this._sqft = value;
  }
}
