var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/tips', { useNewUrlParser: true })
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
  let newTip = new Tip({
    category: tip.category,
    title: tip.title,
    tip: tip.tip,
    problem: tip.problem,
    solution: tip.solution,
    contributor: tip.contributor
  })
  Tip.save((err) => {
    if (err) {
      return handleError(err)
    } else {
      console.log('Saved tip successfully.')
    }
  })
}

var selectAll = function(callback) {
  Item.find({}, function(err, items) {
    if(err) {
      callback(err, null);
    } else {
      callback(null, items);
    }
  });
};

module.exports.selectAll = selectAll;