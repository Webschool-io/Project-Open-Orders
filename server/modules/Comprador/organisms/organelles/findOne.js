'use strict';

module.exports = (Organism) => {
  return (obj, callback) => {
    const arr = require('../../../helpers/prepareDocMongoose')(Organism);
    const Refs = require('../../../helpers/findRefMongoose')(arr);
    const Populate = require('../../../helpers/runPopulateMongoose');

    // Organism.findOne(obj).lean().exec(callback);
    Organism.findOne(obj).lean().exec( (err, data) => {
      if(err) return console.log('ERRO', err);
      // se não tiver Refs retorna o objeto
      if(!Refs.length) callback(err, data)
      if(Object.keys(Refs).length) return Populate.run(data, Refs, callback);
    });
  }
};

