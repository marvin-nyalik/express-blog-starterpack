import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
  res.send('Get all users');
});

router.post('/', (req, res) => {
  res.send('Create a new user');
});

router.get('/:id', (req, res) => {
  res.send(`Get user with ID ${req.params.id}`);
});

export default router;
