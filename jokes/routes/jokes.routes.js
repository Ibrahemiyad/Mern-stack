const express = require('express');
const { getAllJokes, getJoke, createJoke, updateJoke, deleteJoke, getRandomJoke } = require('../controllers/jokes.controller');
const router = express.Router();

router.get('/', getAllJokes);
router.get('/api/jokes/;:id', getJoke);
router.post('/api/jokes', createJoke);
router.put('/api/jokes/:id', updateJoke);
router.delete('/api/jokes/:id', deleteJoke);
router.get('/api/randomjoke', getRandomJoke);
module.exports = router;
