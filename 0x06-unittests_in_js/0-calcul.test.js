const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', () => {
    it('checks the output', () => {
        assert.strictEqual(calculateNumber(1, 3), 4);
        assert.strictEqual(calculateNumber(1.5, 3), 5);
        assert.strictEqual(calculateNumber(1.3, 3.1), 4);
        assert.strictEqual(calculateNumber(-1, 1), 0);
        assert.strictEqual(calculateNumber(-1.5, 1), 0);
        assert.strictEqual(calculateNumber(-1.4, 1.4), 0);
        assert.strictEqual(calculateNumber(0.0, 0), 0);
    });
    });