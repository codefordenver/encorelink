'use strict';

module.exports = function(Event) {
  Event.observe('before save', function filterProperties(ctx, next) {
    if (ctx.isNewInstance) {
      ctx.instance.created = new Date();
    }
    next();
  });
};
