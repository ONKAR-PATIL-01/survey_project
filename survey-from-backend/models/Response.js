var mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');

var ResponseSchema = new mongoose.Schema({
    
    response:{
        type:Array
    },
}, { timestamps: true });

ResponseSchema.plugin(mongoosePaginate);
Response = mongoose.model('Response', ResponseSchema, 'Response');

module.exports = Response; 