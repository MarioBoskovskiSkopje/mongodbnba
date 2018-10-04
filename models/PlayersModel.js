var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var PlayersSchema = new Schema({
  Name: String,
  Position: String,
  Age: Number,
  Nationality: String,
  Img: String,
  TeamsId: [{ type: Schema.Types.ObjectId, ref: "Teams" }]
});

module.exports = mongoose.model("Players", PlayersSchema);
