var express = require('express');
var router = express.Router();

var hobbies = [
  { id: 1, title: 'Oceans 11' },
  { id: 2, title: 'The Hobbit' },
  { id: 3, title: 'Who framed Roger Rabbit' }
]

/* GET hobbies listings. */
router.get('/', function(req, res) {
  res.render('hobbies', { hobbies: hobbies });
});

/* POST add hobby listing */
router.post('/', function(req, res) {
  var title = req.body.title;
  Hobby.create({ title: title })
    .then( function() {
      res.redirect('/hobbies');
  });
});

module.exports = router;