'use strict';
var cupit = require('../../index');
describe('Cupit ', () => {

  it('should call init function', function() {
    sinon.spy(cupit.prototype, 'init');
    cupit({
      matchesFile: './tests/data/bpl_2014-2016.json'
    });
    expect(cupit.prototype.init).to.be.called;
    cupit.prototype.init.restore();
  });

  describe('while initializing ', function() {

    it('should validate options', function() {
      sinon.spy(cupit.prototype, '_validateOptions');
      cupit({
        matchesFile: './tests/data/bpl_2014-2016.json'
      });
      expect(cupit.prototype._validateOptions).to.be.called;
    });

  });

  describe('while validating options', function() {

    it('should throw an error if no matches given', function() {
      expect(function() {
        cupit({});
      }).to.throw('An empty list of matches was set');
    });

    it('should throw an error if matches file  doesn\'t exist', function() {
      expect(function() {
        cupit({
          matchesFile: './tests/data/nonexistent-file.json'
        });
      }).to.throw('ENOENT: no such file or directory, access \'./tests/data/nonexistent-file.json\'');
    });

  });

});
