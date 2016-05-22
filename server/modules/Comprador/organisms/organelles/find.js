'use strict';

module.exports = (Organism) => {

  return (obj, callback) => Organism.find(obj, callback);
  // return (obj, callback) => Organism.find(obj, (err, data) => {
  //   console.log('obj', obj)
  //   console.log('callback', callback)
  // });

};

