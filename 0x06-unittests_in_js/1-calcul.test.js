const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', () => {
  describe('SUM', () => {
    it('should return the sum of the rounded numbers', () => {
        assert.strictEqual(calculateNumber(1, 3), 4);
        assert.strictEqual(calculateNumber(1.5, 3), 5);
        assert.strictEqual(calculateNumber(1.3, 3.1), 4);
        assert.strictEqual(calculateNumber(-1, 1), 0);
        assert.strictEqual(calculateNumber(-1.5, 1), 0);
        assert.strictEqual(calculateNumber(-1.4, 1.4), 0);
        assert.strictEqual(calculateNumber(0.0, 0), 0);    });
  });

  describe('SUBTRACT', () => {
    it('should return the subtraction of the rounded numbers', () => {
       assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 4.5), -3);
       assert.strictEqual(calculateNumber('SUBTRACT', 4.5, 1.4), 3);
       assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 1.4), 0);
       assert.strictEqual(calculateNumber('SUBTRACT', 0.0, 0), 0);
       assert.strictEqual(calculateNumber('SUBTRACT', -2.3, -1.8), 0);
    });
  });

  describe('DIVIDE', () => {
    it('should return the division of the rounded numbers', () => {
       assert.strictEqual(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
       assert.strictEqual(calculateNumber('DIVIDE', 4.5, 1.4), 3.25);
       assert.strictEqual(calculateNumber('DIVIDE', 1.4, 1.4), 1);
       assert.strictEqual(calculateNumber('DIVIDE', 0.0, 0), 'Error');});
       assert.strictEqual(calculateNumber('DIVIDE', 1.4, 0), 'Error');
       assert.strictEqual(calculateNumber('INVALID', 1.4, 4.5), 0);
  });
});
