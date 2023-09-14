const mongoose = require('mongoose');
// optional shortcut to the mongoose.Schema class
const Schema = mongoose.Schema;

const statSchema = new Schema({
  name: String,
  position: String,
  goals: String,
  assist: [String]
});