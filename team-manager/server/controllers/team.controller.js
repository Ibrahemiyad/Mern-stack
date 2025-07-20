const Team = require('../models/team.model');

module.exports = {
    getAll: (req, res) => {
        Team.find().sort({ name: 1 })
            .then(teams => res.json(teams))
            .catch(err => res.status(400).json(err));
    },

    getOne: (req, res) => {
        Team.findById(req.params.id)
            .then(team => {
                if (!team) return res.status(404).json({ message: 'Not found' });
                res.json(team);
            })
            .catch(err => res.status(400).json(err));
    },

    create: (req, res) => {
        Team.create(req.body)
            .then(newTeam => res.json(newTeam))
            .catch(err => res.status(400).json(err));
    },

    update: (req, res) => {
        Team.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })
            .then(updated => res.json(updated))
            .catch(err => res.status(400).json(err));
    },

    delete: (req, res) => {
        Team.findByIdAndDelete(req.params.id)
            .then(() => res.json({ message: 'Deleted successfully' }))
            .catch(err => res.status(400).json(err));
    }
};
