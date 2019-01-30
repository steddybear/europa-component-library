/* eslint-disable global-require */
require('core-js/es6/map');
require('core-js/es6/set');

if (typeof Promise === 'undefined') {
  // Rejection tracking prevents a common issue where React gets into an
  // inconsistent state due to an error, but it gets swallowed by a Promise,
  // and the user has no idea what causes React's erratic future behavior.
  require('promise/lib/rejection-tracking').enable();
  window.Promise = require('promise/lib/es6-extensions.js');
}

// Object.assign() is commonly used with React.
// It will use the native implementation if it's present and isn't buggy.
Object.assign = require('object-assign');

// Support for...of (a commonly used syntax feature that requires Symbols)
require('core-js/es6/symbol');
// Support iterable spread (...Set, ...Map)
require('core-js/fn/array/from');
