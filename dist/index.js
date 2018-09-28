'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));

var test = function test() {
  return React;
};

var someDynamicImport = function someDynamicImport() {
  var test = Promise.resolve({ default: require("/Users/my-username/dev/rollup-resolve-externalised-dynamic-imports/node_modules/react/index.js") });
  return test;
};

exports.test = test;
exports.someDynamicImport = someDynamicImport;
