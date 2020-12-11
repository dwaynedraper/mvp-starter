const express = require('express');
const bodyParser = require('body-parser');
const db = require('../database-mongo');

var app = express();

app.use(express.static(__dirname + '/../react-client/dist'));
app.use(bodyParser.json)

app.get('/:category', function (req, res) {
  // Should access all databse entries that a given category has.
  // TODO: only after MVP - If 0, go to '/lifehacks'

  // tips.selectAll(function(err, data) {
  //   if(err) {
  //     res.sendStatus(500);
  //   } else {
  //     res.json(data);
  //   }
  // });
  res.send('working')
});
app.post('/submit', function(req, res) {
  console.log('new item submitted');
  let tip = req.body;
  db.saveTip(tip);
})

app.listen(3000, function() {
  console.log('listening on port 3000!');
});

