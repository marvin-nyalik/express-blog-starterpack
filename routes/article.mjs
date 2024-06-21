import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
  res.render('articles/index');
});

export default router;
