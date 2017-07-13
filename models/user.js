var mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost/test');

// var Schema = mongoose.Schema;


const userSchema = new mongoose.Schema({
  name: {type: String, required: true},
  password: {type: String, required: true}
});

const User = mongoose.model('user', userSchema);

module.exports = User;
