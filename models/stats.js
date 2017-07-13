var mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost/test');
// var Schema = mongoose.Schema;

const statsSchema = new mongoose.Schema({
  type: {type: String},
  reps: {type: Number},
  date: {type: Date},
});

const Stats = mongoose.model('stats', statsSchema);

module.exports = Stats;
