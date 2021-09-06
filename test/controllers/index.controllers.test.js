import { expect, request } from '../config';
import { validIps } from '../../src/config/validIp';

describe('Index Route', () => {
  const endpoint = '/';
  const method = 'get';
  context('when IP address is valid', () => {
    it('should have status 200', (done) => {
      request()
        [method](endpoint)
        .end((err, res) => {
          expect(res).to.have.status(200);
          expect(res.body.success).to.be.eql(true);
          expect(res.body.message).to.be.eql('Valid IP address');
          done();
        });
    });
  });

  context('when IP address is invalid', () => {
    beforeEach(() => {
      validIps.pop();
    });
    it('should have status 403', (done) => {
      request()
        [method](endpoint)
        .end((err, res) => {
          expect(res).to.have.status(403);
          expect(res.body.success).to.be.eql(false);
          expect(res.body.message).to.be.eql('IP not allowed');
          done();
        });
    });
  });
});
