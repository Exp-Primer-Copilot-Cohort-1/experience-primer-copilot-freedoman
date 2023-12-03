// Create web server
var express = require('express');
var router = express.Router();
var Comment = require('../models/comment');

// Get all comments
router.get('/', function(req, res) {
  Comment.find(function(err, comments) {
    if (err) {
      res.send(err);
    }
    res.json(comments);
  });
});

// Create new comment
router.post('/', function(req, res) {
  var comment = new Comment();
  comment.comment = req.body.comment;
  comment.save(function(err) {
    if (err) {
      res.send(err);
    }
    res.json({ message: 'Comment created!' });
  });
});

// Get comment by id
router.get('/:comment_id', function(req, res) {
  Comment.findById(req.params.comment_id, function(err, comment) {
    if (err) {
      res.send(err);
    }
    res.json(comment);
  });
});

// Update comment by id
router.put('/:comment_id', function(req, res) {
  Comment.findById(req.params.comment_id, function(err, comment) {
    if (err) {
      res.send(err);
    }
    comment.comment = req.body.comment;
    comment.save(function(err) {
      if (err) {
        res.send(err);
      }
      res.json({ message: 'Comment updated!' });
    });
  });
});

// Delete comment by id
router.delete('/:comment_id', function(req, res) {
  Comment.remove({
    _id: req.params.comment_id
  }, function(err, comment) {
    if (err) {
      res.send(err);
    }
    res.json({ message: 'Successfully deleted' });
  });
});

module.exports = router;