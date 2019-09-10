var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Studentcollection = new Schema({
    name: String,
    rollnum: Number,
    branch: String
});

var smodel = mongoose.model('studentinfo', Studentcollection);
module.exports = smodel;