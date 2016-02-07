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
        cupit({
          matches: ''
        });
      }).to.throw('Matches list was not set');
    });

    it('should throw an error if matches file  doesn\'t exist', function() {
      let errString = 'ENOENT: no such file or directory, ' +
        'access \'./tests/data/nonexistent-file\'';

      expect(function() {
        cupit({
          matchesFile: './tests/data/nonexistent-file'
        });
      }).to.throw(errString);
    });

    it('should throw an error is json is invalid', function() {
      expect(function() {
        cupit({
          matchesFile: './tests/data/invalid/invalid_json.json'
        });
      }).to.throw('Invalid JSON string is set as matches list file @ ' +
        './tests/data/invalid/invalid_json.json');

      expect(function() {
        cupit({
          matchesFile: './tests/data/invalid/not_an_array_json.json'
        });
      }).to.throw('Matches list must be an array');

      expect(function() {
        cupit({
          matches: 'NOT AN ARRAY'
        });
      }).to.throw('Matches list must be an array');

      expect(function() {
        cupit({
          matchesFile: './tests/data/invalid/one_match.json'
        });
      }).to.throw('Matches list should contain at least 2 matches');

    });

  });

});
