const crypto = require('crypto');

module.exports = function generateUmiqueId() {
  return crypto.randomBytes(4).toString('HEX');
}
