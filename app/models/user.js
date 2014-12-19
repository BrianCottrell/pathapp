//Add required javascript files
var mongoose = require('mongoose');
var bcrypt   = require('bcrypt-nodejs');

//Define a user model
var userSchema = mongoose.Schema({
    username: String,
    password: String,
    paths: Array
});

//Generate a hash
userSchema.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

//Check if the password is valid
userSchema.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
};

//Export the user model to the rest of the application
module.exports = mongoose.model('User', userSchema);
