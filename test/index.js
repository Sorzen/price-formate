const assert = require('power-assert');
const format = require('../');

describe('price-format', function() {
  describe('#format()', function() {
    it('should return 10,000 when the value is 10000', function() {
      assert('10,000.00' === format(10000));
    });
    it('should return 10,000.12 when the value is 10000.121', function() {
      assert('10,000.121' === format(10000.121));
    });
    it('should return 10,000.12 when the value is 10000.121', function() {
      assert('0.12' === format(0.120));
    });
  });
});
