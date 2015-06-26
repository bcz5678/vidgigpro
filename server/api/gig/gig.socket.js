/**
 * Broadcast updates to client when the model changes
 */

'use strict';

var gig = require('../../sqldb').gig;

exports.register = function(socket) {
  gig.hook('afterCreate', function(doc, fields, fn) {
    onSave(socket, doc);
    fn(null);
  });
  gig.hook('afterUpdate', function(doc, fields, fn) {
    onSave(socket, doc);
    fn(null);
  });
  gig.hook('afterDestroy', function(doc, fields, fn) {
    onRemove(socket, doc);
    fn(null);
  });
};

function onSave(socket, doc, cb) {
  socket.emit('gig:save', doc);
}

function onRemove(socket, doc, cb) {
  socket.emit('gig:remove', doc);
}
