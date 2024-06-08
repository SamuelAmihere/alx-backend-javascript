const chai = require('chai');
const sinon = require('sinon');
const sendPaymentRequestToApi = require('./5-payment');
const Utils = require('./utils');

describe('sendPaymentRequestToApi', () => {
  let consoleSpy;

  beforeEach(() => {
    // Spy on console.log before each test
    consoleSpy = sinon.spy(console, 'log');
  });

  afterEach(() => {
    // Restore console.log after each test
    consoleSpy.restore();
  });

  it('logs correct output with totalAmount=100 and totalShipping=20', () => {
    sendPaymentRequestToApi(100, 20);
    chai.expect(consoleSpy.calledOnceWithExactly('The total is: 120')).to.be.true;
  });

  it('logs correct output with totalAmount=10 and totalShipping=10', () => {
    sendPaymentRequestToApi(10, 10);
    chai.expect(consoleSpy.calledOnceWithExactly('The total is: 20')).to.be.true;
  });
});
