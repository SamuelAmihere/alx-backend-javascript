const Utils = require('./utils');
const sendPaymentRequestToApi = require('./4-payment');
const { expect } = require('chai');
const sinon = require('sinon');


describe('sendPaymentRequestToApi', () => {
    it('should call sendPaymentRequestToApi with the right arguments', () =>{
        const stub = sinon.stub(Utils, 'calculateNumber');
        const spy = sinon.spy(console);

        stub.returns(10);
        sendPaymentRequestToApi(100, 20);
        expect(stub.calledWith('SUM', 100, 20)).to.be.true;
        expect(stub.callCount).to.be.equal(1);
        expect(spy.log.calledWith('The total is: 10')).to.be.true;
        expect(spy.log.callCount).to.be.equal(1);

        stub.restore();
        spy.log.restore();
    });
});
