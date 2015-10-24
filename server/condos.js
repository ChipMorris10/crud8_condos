var mongoose = require('mongoose-q') (require('mongoose'),{spread:true});
var Schema = mongoose Schema;

var Condo = new Condos ({
    bedRms: Number,
    price: Number,
    location: Text,
    garage: Boolean
});


module.exports = mongoose.model("condos", Condo);