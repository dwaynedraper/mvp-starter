const express = require('express');
const bodyParser = require('body-parser');
const tips = require('../database-mongo');

var app = express();

app.use(express.static(__dirname + '/../react-client/dist'));
app.use(bodyParser.json());
app.use(express.urlencoded({extended: true}));

app.get('/tips', function (req, res) {
  // Should access all databse entries that a given category has.
  // TODO: only after MVP - If 0, go to '/lifehacks'
  tips.selectAll((err, data) => {
    if (err) {
      res.sendStatus(500);
    } else {
      res.send(data)
    }
  })
});
app.post('/submit', function(req, res) {
  console.log('app.post in server ran')
  console.log('app POST req.body', req.body)
  let tip = req.body;
  tips.saveTip(tip);
  //res.send('finished POST REQUEST', data)
  res.end();
})

app.listen(3000, function() {
  console.log('listening on port 3000!');
});

