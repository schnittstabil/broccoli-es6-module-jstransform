'use strict';
var Filter = require('broccoli-filter'),
    transform = require('es6-module-jstransform');

function Es6ModuleJsTransformFilter(inputTree) {
  if (!(this instanceof Es6ModuleJsTransformFilter)) {
    return new Es6ModuleJsTransformFilter(inputTree);
  }
  this.inputTree = inputTree;
}

Es6ModuleJsTransformFilter.prototype = Object.create(Filter.prototype);

Es6ModuleJsTransformFilter.prototype.constructor = Es6ModuleJsTransformFilter;

Es6ModuleJsTransformFilter.prototype.extensions = ['js'];

Es6ModuleJsTransformFilter.prototype.targetExtension = 'js';

Es6ModuleJsTransformFilter.prototype.processString = function (str) {
  return transform(str).code;
};

module.exports = Es6ModuleJsTransformFilter;
