import express from 'express';
var router = express.Router();

/* GET users listing. */
router.get('/posts', function(req, res, next) {
  res.send('respond with all posts');
});

export default router;
