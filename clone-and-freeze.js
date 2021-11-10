const _ = require('lodash');

function cloneAndFreeze(obj) {
  const newObj = _.cloneDeep(obj);
  return Object.freeze(newObj);
}

module.exports.cloneAndFreeze = cloneAndFreeze;