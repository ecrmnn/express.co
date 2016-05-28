'use strict';

var layer = require('express/lib/router/layer');
var co = require('co');

layer.prototype.handle_request = function handle(req, res, next) {
  var fn = this.handle;

  if (fn.constructor.name === 'GeneratorFunction') {
    fn = co.wrap(fn);

    if (fn.length > 3) {
      // not a standard request handler
      return next();
    }

    return fn(req, res, next).catch(next);
  }

  if (fn.length > 3) {
    // not a standard request handler
    return next();
  }

  try {
    fn(req, res, next);
  } catch (err) {
    next(err);
  }
}