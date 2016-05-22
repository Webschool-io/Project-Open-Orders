'use strict';

const Quark = 'is';
const QuarkName = 'Name';

module.exports = {
  validator: require('./../quarks/'+Quark+QuarkName)
, message: require('./../quarks/'+Quark+QuarkName+'Message')
};