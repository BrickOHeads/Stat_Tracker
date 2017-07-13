var mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost/test');
//
// var Schema = mongoose.Schema;

const activitySchema = new mongoose.Schema({
  type: {type: String},
  reps: {type: String},
  date: {type: Date},
});

const Activity = mongoose.model('Activity', activitySchema);

module.exports = Activity;
