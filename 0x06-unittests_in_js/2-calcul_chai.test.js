const { expect } = require('chai');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', () => {
  describe('SUM', () => {
    it('should return the sum of the rounded numbers', () => {
      expect(calculateNumber('SUM', 1, 3)).to.equal(4);
      expect(calculateNumber('SUM', 1.5, 3)).to.equal(5);
      expect(calculateNumber('SUM', 1.3, 3.1)).to.equal(4);
      expect(calculateNumber('SUM', -1, 1)).to.equal(0);
      expect(calculateNumber('SUM', -1.5, 1)).to.equal(0);
      expect(calculateNumber('SUM', -1.4, 1.4)).to.equal(0);
      expect(calculateNumber('SUM', 0.0, 0)).to.equal(0);
    });
  });

  describe('SUBTRACT', () => {
    it('should return the subtraction of the rounded numbers', () => {
      expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-4);
      expect(calculateNumber('SUBTRACT', 4.5, 1.4)).to.equal(4);
      expect(calculateNumber('SUBTRACT', 1.4, 1.4)).to.equal(0);
      expect(calculateNumber('SUBTRACT', 0.0, 0)).to.equal(0);
      expect(calculateNumber('SUBTRACT', -2.3, -1.8)).to.equal(0);
    });
  });

  describe('DIVIDE', () => {
    it('should return the division of the rounded numbers', () => {
      expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.equal(0.2);
      expect(calculateNumber('DIVIDE', 4.5, 1.4)).to.equal(5);
      expect(calculateNumber('DIVIDE', 1.4, 1.4)).to.equal(1);
      expect(calculateNumber('DIVIDE', 0.0, 0)).to.equal('Error');
      expect(calculateNumber('DIVIDE', 1.4, 0)).to.equal('Error');
      expect(calculateNumber('INVALID', 1.4, 4.5)).to.equal(0);
    });
  });
});
