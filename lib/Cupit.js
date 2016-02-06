'use strict';

function Cupit(options) {
  var self = this;
  if (!(this instanceof Cupit)) {
    return new Cupit(options);
  }
  return self;
}

Cupit.prototype.getStandings = function() {
  console.log('football rocks');
};

module.exports = Cupit;
