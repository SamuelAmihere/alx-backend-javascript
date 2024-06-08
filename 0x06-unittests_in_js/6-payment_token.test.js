const chai = require('chai');
const getPaymentTokenFromAPI = require('./6-payment_token');

describe('getPaymentTokenFromAPI', () => {
  it('resolves with correct data when input is true', (done) => {
    getPaymentTokenFromAPI(true)
      .then((res) => {
        chai.expect(res).to.eql({ data: 'Successful response from the API' });
        done();
      })
      .catch((err) => done(err));
  });
});
