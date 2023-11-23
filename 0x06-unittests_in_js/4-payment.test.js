/**
* Tests for Payment function
*/
const sinon = require('sinon');
const Utils = require('./utils');
const { expect } = require('chai');
const sendPaymentRequestToApi = require('./4-payment');

describe('sendPaymentRequestToApi', () => {
  it('sendPaymentRequestToApi calls console.log with the right arguments', () => {
    const incognito = sinon.spy(console);
    const testRun = sinon.stub(Utils, 'calculateNumber');

    testRun.returns(10);
    sendPaymentRequestToApi(100, 20);
    expect(testRun.calledWith('SUM', 100, 20)).to.be.true;
    expect(testRun.callCount).to.be.equal(1);
    expect(incognito.log.calledWith('The total is: 10')).to.be.true;
    expect(incognito.log.callCount).to.be.equal(1);
    testRun.restore();
    incognito.log.restore();
  });
});
