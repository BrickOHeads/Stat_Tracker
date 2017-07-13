const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const mustache = require('mustache-express');
const passport = require('passport');
const BasicStrategy = require('passport-http').BasicStrategy;
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const statsRouter = require('./routes/api');

mongoose.connect('mongodb://localhost:27017/stats');
mongoose.Promise = require('bluebird');

app.use(bodyParser.json() );
app.use(bodyParser.urlencoded ({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/api', statsRouter);
//the 'statsRouter' refers to the mongoose.connect and stats


app.listen(3000);
