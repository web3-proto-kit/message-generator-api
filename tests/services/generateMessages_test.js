/* eslint-disable no-unused-vars, no-undef */
import chai from 'chai';
import generateMessages from '../../src/services/generateMessages';

const should = chai.should();

const maxNumOfMessages = 20;

describe('Services: generateMessages', () => {
  context('generateMessages()', () => {
    it(`should return a list of messages between 1 and ${maxNumOfMessages}`, () => {
      const messages = generateMessages(maxNumOfMessages);
      messages.should.be.an('array');
      (messages.length >= 1 && messages.length <= maxNumOfMessages).should.equal(true);
    });
  });
});
