var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/tips',{ useMongoClient: true })
.then(() => {
  console.log('Connection open!');
})
.catch((err) => {
  console.log('Connection error: ');
  console.log(err);
})

const tipSchema = new mongoose.Schema({
  category: String,
  title: String,
  tip: String,
  problem: String,
  solution: String,
  contributor: String
});

const Tip = mongoose.model('Tip', tipSchema);

const saveTip = (tip) => {
  console.log('saveTip function ran');
  let newTip = new Tip({
    category: tip.category,
    title: tip.title,
    tip: tip.tip,
    problem: tip.problem,
    solution: tip.solution,
    contributor: tip.contributor
  })
  newTip.save((err) => {
    if (err) {
      return handleError(err)
    } else {
      console.log('Saved tip successfully.')
    }
  })
}

var selectAll = function(callback) {
  Tip.find({}, function(err, tips) {
    if(err) {
      callback(err, null);
    } else {
      callback(null, tips);
    }
  });
};

module.exports.saveTip = saveTip;
module.exports.selectAll = selectAll;