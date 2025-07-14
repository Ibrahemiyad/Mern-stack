const Joke = require('../models/jokes.model');
module.exports = {
    getAllJokes: (req, res) => {
        Joke.find()
            .then(allJokes => res.json({ jokes: allJokes }))
            .catch(err => res.status(400).json({ message: "Something went wrong", error: err }));
    },
    getJoke:(req, res) => {
        joke.findById(req.params.id)
            .then(joke => {
                if (!joke) {
                    return res.status(404).json({ message: "Joke not found" });
                }
                res.json({ joke });
            })
            .catch(err => res.status(500).json(err));
    },
    createJoke: (req, res) => {
        const newJoke = new Joke(req.body);
        newJoke.save()
            .then(joke => res.status(201).json({ joke }))
            .catch(err => {
                if (err.name === 'ValidationError') {
                    return res.status(400).json(err);
                }else{
                    return res.status(500).json(err);
                }
                
            })

    },
    updateJoke: (req, res) => {
        Joke.findByIdAndDelete(req.params.id, req.body, { new: true, runValidators: true })
            .then(joke => {
                if (!joke) {
                    return res.status(404).json({ message: "Joke not found" });
                }
                res.json({ joke });
            })
            .catch(err => {
                if (err.name === 'ValidationError') {
                    return res.status(400).json(err);
                } else {
                    return res.status(500).json(err);
                }
            });
    },
    deleteJoke: (req, res) => {
        Joke.findByIdAndDelete(req.params.id)
            .then(joke => {
                if (!joke) {
                    return res.status(404).json({ message: "Joke not found" });
                }
                res.json({ joke });
            })
            .catch(err => res.status(500).json(err));
    },
    getRandomJoke : (req, res) => {
        Joke.countDocuments()
            .then(count => {
                const rand = Math.floor(Math.random() * count);
                Joke.findOne(). skip(rand)
                .then(joke => res.json(joke))
                .catch(err => res.status(500).json(err));
            })
            .catch(err => res.status(500).json(err));
    }
}