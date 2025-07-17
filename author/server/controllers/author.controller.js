const Author = require('../models/author.model');

module.exports = {
    getAll: (req, res) => {
        Author.find().sort({ name: 1 })
            .then(authors => res.json(authors))
            .catch(err => res.status(400).json(err));
    },
    getOne: (req, res) => {
        Author.findById(req.params.id)
            .then(author => {
                if (!author) {
                    return res.status(404).json({ message: 'Not found' });
                }
                res.json(author);
            })
            .catch(err => res.status(400).json(err));
    },
    create: (req, res) => {
        Author.create(req.body)
            .then(newAuthor => res.json(newAuthor))
            .catch(err => res.status(400).json(err));
    },
    update: (req, res) => {
        Author.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })
            .then(updated => res.json(updated))
            .catch(err => res.status(400).json(err));
    },
    delete: (req, res) => {
        Author.findByIdAndDelete(req.params.id)
            .then(() => res.json({ message: 'Deleted successfully' }))
            .catch(err => res.status(400).json(err));
    }
}
