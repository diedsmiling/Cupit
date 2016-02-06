'use strict';
var cupit = require('../../index');
describe('Cupit ', () => {

  it('should call init function', function() {
    sinon.spy(cupit.prototype, 'init');
    cupit({
      matchesPath: 'data/match-list.js'
    });
    expect(cupit.prototype.init).to.be.called;
    cupit.prototype.init.restore();
  });

  describe('while initializing ', function() {

    it('Should validate options', function() {
      sinon.spy(cupit.prototype, '_validateOptions');
      cupit({
        matchesPath: 'data/match-list.js'
      });
      expect(cupit.prototype._validateOptions).to.be.called;
    });

  });

  describe('while validating options', function() {

    it('it should throw an error if no matches given', function() {
      expect(function() {
        cupit({});
      }).to.throw('An empty list of matches was set');
    });

  });

});
