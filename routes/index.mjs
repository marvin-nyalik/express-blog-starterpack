import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
  res.send('Hello, world! from routes');
});

export default router;
