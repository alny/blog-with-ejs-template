var express = require('express');
var router = express.Router();

/* Importing post model*/
var Post = require('../models/post');


/* GET home page. */
router.get('/', function(req, res, next) {
  Post.find(null, function(err, posts){
    res.render('index', { title: 'Express', posts: posts});

  });


});

router.get('/create-post', function(req, res){
  res.render('create-post')
});

router.post('/create-post', function(req, res){
  var body = req.body;
  Post.create(body, function(err){
    if(err) return handleErrror(err);
    console.log('Nyt Blogpost sendt til databasen');
  })
  res.redirect('/');
});

router.get('/:id', function(req, res){
  var id = req.params.id;
  Post.findById(id, function(err, sPost){
    if(err) throw err;
    res.render('single-post', {sPost:sPost})

  });


});
router.get('/:id/edit', function(req, res){
  var id = req.params.id;
  Post.findById(id, function(err, sPost){
    if(err) throw err;
    res.render('edit', {sPost:sPost})

  });


});

router.put('/:id/edit', function(req, res){
  var body = req.body;
  Post.findByIdAndUpdate(req.params.id, body, function(err, post){
    res.redirect('/' + post.id);
  });
});

router.delete('/:id', function(req, res){
  Post.findByIdAndRemove(req.params.id, function(err){
    res.redirect('/');

  })

});





module.exports = router;
