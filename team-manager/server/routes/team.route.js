const express = require('express');
const router = express.Router();
const teamController = require('../controllers/team.controller');

module.exports = (app) => {

    router.get('/', teamController.getAll);

    router.post('/', teamController.create);

    router.get('/:id', teamController.getOne);

    router.put('/:id', teamController.update);

    router.delete('/:id', teamController.delete);

    app.use('/api/teams', router);
};
