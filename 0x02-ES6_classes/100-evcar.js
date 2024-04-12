import Car from './10-car';

export default class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color);
    this._range = range;
  }

  get range() {
    return this._range;
  }

  set range(value) {
    if (typeof value !== 'string') {
      throw TypeError('range must be a string');
    }
    this._range = value;
  }

  cloneCar() {
    return new Car(this._brand, this._motor, this._color);
  }
}
