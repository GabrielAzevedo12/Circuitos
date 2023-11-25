const express = require('express');
var path = require('path');
const fs = require('fs');
const app = express();

app.use(express.json());

app.get('/ip.html', (req, res) => {
  var options = {
        root: path.join(__dirname), 
    }

    var CD = path.basename(__dirname);
    console.log(__dirname);
    var fileName = "./ip.html";
    res.sendFile(fileName, options, function (err) {
      if (err) {
        next(err)
      } else {
        console.log('Sent:', fileName)
      }

    })

}); 

app.get('/ip.css', function (req, res, next) {

    var options = {
        root: path.join(__dirname), 
    }

    var CD = path.basename(__dirname);
    console.log(__dirname);
    var fileName = "./ip.css";
    res.sendFile(fileName, options, function (err) {
      if (err) {
        next(err)
      } else {
        console.log('Sent:', fileName)
      }
    })

});

app.get('/ip2.html', (req, res) => {
  var options = {
        root: path.join(__dirname), 
    }

    var CD = path.basename(__dirname);
    console.log(__dirname);
    var fileName = "./ip2.html";
    res.sendFile(fileName, options, function (err) {
      if (err) {
        next(err)
      } else {
        console.log('Sent:', fileName)
      }

    })

}); 


app.get('/:id', (req, res) => {
    res.status(200).json([]);
});

app.listen(3035, () => {
    console.log('our app is running locally...');
});
