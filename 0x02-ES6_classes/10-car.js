export default class Car {
  constructor(brand, motor, color) {
    // if (typeof brand !== 'string') {
    //   throw TypeError('brand must be a string');
    // }
    // if (typeof motor !== 'string') {
    //   throw TypeError('motor must be a string');
    // }
    // if (typeof color !== 'string') {
    //   throw TypeError('color must be a string');
    // }
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  get brand() {
    return this._brand;
  }

  get motor() {
    return this._motor;
  }

  get color() {
    return this._color;
  }

  set brand(value) {
    if (typeof value !== 'string') {
      throw TypeError('brand must be a string');
    }
    this._brand = value;
  }

  set motor(value) {
    if (typeof value !== 'string') {
      throw TypeError('motor must be a string');
    }
    this._motor = value;
  }

  set color(value) {
    if (typeof value !== 'string') {
      throw TypeError('color must be a string');
    }
    this._color = value;
  }

  static get [Symbol.species]() {
    return this;
  }

  cloneCar() {
    const Models = this.constructor[Symbol.species];
    if (Models === undefined) {
      return null;
    }
    return new Models();
  }
}
