//Add required javascript files
var mongoose = require('mongoose');

//Define the high score model
var highscoreSchema = mongoose.Schema({
	name: String,
    path: Number
});

//Export the highscore model to the rest of the application
module.exports = mongoose.model('Highscore', highscoreSchema);