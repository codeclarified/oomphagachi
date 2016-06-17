var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    passportLocalMongoose = require('passport-local-mongoose');

var Pet = new Schema({
    name: String,
    owner: String
});

module.exports = mongoose.model('Pet', Pet);
