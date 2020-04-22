var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Mot = new Schema({
    name: {
      type: String,
      required : true,
      
    },
    definition: {
        type: String,
        required : true,
        
      },
    
  },
);
  
  module.exports = mongoose.model('Mot', Mot);