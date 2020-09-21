var mongoose = require('mongoose');
var UserSchema = new mongoose.SchemaType({
    name: String,
    email: String,
    password: String
});

mongoose.model('user', UserSchema);
module.exports = mongoose.model('user');