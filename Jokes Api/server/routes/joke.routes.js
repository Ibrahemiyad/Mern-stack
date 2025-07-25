const JokeController = require('../controllers/joke.controller');

module.exports = app => {
  app.get('/api/jokes', JokeController.findAllJokes);
  app.get('/api/jokes/:id', JokeController.findOneJoke);
  app.post('/api/jokes', JokeController.createJoke);
  app.patch('/api/jokes/:id', JokeController.updateJoke);
  app.delete('/api/jokes/:id', JokeController.deleteJoke);
};
