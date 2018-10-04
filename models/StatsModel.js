var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var StatsSchema = new Schema({
	'Points' : Number,
	'Assists' : Number,
	'Rebounds' : Number,
	'Steals' : Number,
	'Blocks' : Number
});

module.exports = mongoose.model('Stats', StatsSchema);
