const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();
const Stats = require('../models/stats');
const User = require('../models/user');
const Activity = require ('../models/activity');

router.get('/user', function(req,res){
  User.find({}).then( function (user){
    res.json(user);
  })
  .catch(function(y){
    res.send("wrong", y)
  })
});

router.post('/user', function(req, res){
  User.create({
    name: req.body.name,
    password: req.body.password
  })
  .then (newUser => {
    res.status(201).json(newUser);
    //201 is the code to create.. that is why that is there
  })
  .catch( function (y){
    res.send("Bad job", y)
  })
});

// for the stats
router.get('/stats', function(req,res){
  Stats.find({}).then( function (stats){
    res.json(stats);
  })
  .catch(function(y){
    res.send("wrong", y)
  })
});

router.post('/stats', function(req, res){
  Stats.create({
    type: req.body.type,
    reps: req.body.reps,
    date: req.body.date
  })
  .then (newStats => {
    res.status(201).json(newStats);
    //201 is the code to create.. that is why that is there
  })
  .catch( function (y){
    res.send("Bad job", y)
  })
});

// for the Activity
router.get('/activity', function(req,res){
  Activity.find({}).then( function (activity){
    res.json(activity);
  })
  .catch(function(y){
    res.send("wrong", y)
  })
});

router.post('/activity', function(req, res){
  activity.create({
    type: req.body.type,
    reps: req.body.reps,
    date: req.body.date
  })
  .then (newActivity => {
    req.status(201).json(newActivity);
    //201 is the code to create.. that is why that is there
  })
  .catch( function (y){
    res.send("Bad job", y)
  })
});


// put activity_id
router.put('/stats/:activity_id', (req, res) =>{
  Stats.findOneAndUpdate({
         activity: req.body.activity,
         reps: req.body.reps,
  }).then(newStat =>{
     res.status(201).json(newStat);
   })
   .catch(x=>{
     res.send("wrongggg on 2nd catch", x);
   })
});



module.exports = router;
