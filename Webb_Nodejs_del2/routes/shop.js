
'use strict';
const fs = require('fs');
const path = require('path');

const express = require('express');

const router = express.Router();



let rawdata = fs.readFileSync(path.join(__dirname, 'student.json'));
let student = JSON.parse(rawdata);
console.log(student);


function getTodaysDate() {
  const today = new Date();

  const options = { 
    weekday: 'long', 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  };

  return today.toLocaleDateString('en-US', options);
}

router.get('/', function (req, res, next) {
  //setInterval(() => {
    
  res.render('home', {student}) 
 
}
);


router.get('/about', function (req, res, next) {
  const currentDate = getTodaysDate();
    
  res.render('about', {dateTime: currentDate}) 
 
}
);


router.get('/contact', function (req, res, next) {
  const currentDate = getTodaysDate();
    
  res.render('contact', {dateTime: currentDate}) 
 
}
);
// router.get("/ftg1", function(req, res, next) {
//   res.sendFile(path.join(__dirname, '../', 'views', 'ftg1.html'));
  
// });

module.exports = router;
