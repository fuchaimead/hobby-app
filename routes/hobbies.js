var express = require('express');
var router = express.Router();
var Hobby = require('../models').Hobby;

/* GET hobby listings. */
router.get('/', function(req, res) {
  Hobby.all()
    .then( function(hobbies) {
      return res.render('hobbies', { hobbies: hobbies });
  })
});

/* POST add hobby listing */
router.post('/', function(req, res) {
  var title = req.body.title;
  Hobby.create({ title: title })
    .then( function() {
      res.redirect('/hobbies');
  });
});

//  DELETE /hobbies/7
router.delete('/:id', function(req, res) {
  Hobby.findById(req.params.id)
    .then( function(hobby) {
      hobby.destroy()
    })
    .then( function() {
      return res.redirect('/hobbies');
  });
});

router.get('/:id/edit', function(req, res) {
  Hobby.findById(req.params.id)
    .then( function(hobby) {
      return res.render('edit', { hobby: hobby });
  });
});

router.put('/:id', function(req, res) {
  Hobby.update(
    { title: req.body.title },
    { where: { id: req.params.id } }
  )
  .then( function() {
    return res.redirect('/hobbies');
  })
});

module.exports = router;