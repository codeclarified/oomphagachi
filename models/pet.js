var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    passportLocalMongoose = require('passport-local-mongoose');

var Pet = new Schema({
    name: String,
    owner: String,
    url_name: String,
    birthday: Date,
    fed_at: Date,
    played_at: Date,
    slept_at: Date
});

module.exports = mongoose.model('Pet', Pet);
