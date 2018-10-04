var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var TeamsSchema = new Schema({
	'Name' : String,
	'SeasonRecord' : String,
	'Conference' : String,
	'Ranking' : Number,
	'Logo' : String
});

module.exports = mongoose.model('Teams', TeamsSchema);
