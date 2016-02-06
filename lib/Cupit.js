'use strict';
var _ = require('lodash');
var defaultOptions = require('./defaultOptions');

function Cupit(options) {
  if (!(this instanceof Cupit)) {
    return new Cupit(options);
  }
  this.init(options);
  return this;
}

/**
 * Default options
 */
Cupit.prototype.options = defaultOptions;

/**
 * List of available sports
 */
Cupit.prototype.sports = ['soccer', 'hockey'];

/**
 * List of available competition types
 */
Cupit.prototype.competitionTypes = ['league', 'mixed', 'cup'];

Cupit.prototype.init = function(options) {
  this._validateOptions(options);
  this.options = _.defaults(options || {}, this.options);
};

/**
 * Validates options
 *
 * @param {obj} options
 */
Cupit.prototype._validateOptions = function(options) {
  // validate matches
  if (
      (typeof options.matchesPath != 'string' ||
        options.matchesPath == '') &&
      (!Array.isArray(options.matches) ||
        options.matches.length < 2)
  ) {
    throw new Error('An empty list of matches was set');
  }

};

Cupit.prototype.getStandings = function() {
  console.log('football rocks');
};

module.exports = Cupit;
