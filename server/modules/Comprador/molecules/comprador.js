const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Molecule = {
  name: require('./../atoms/name')
// , dateBirth: require('./../atoms/dateBirth')
// , products: [{type: Schema.Types.ObjectId, ref: 'products'}]
}

module.exports = new Schema(Molecule);