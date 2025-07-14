const mongoose = require('mongoose');
const JokeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Setup is required"],
        minlength: [10, "Setup must be at least 10 characters long"]
    },
    age: {
        type: Number,
        required: [true, "Punchline is required"],
        minlength: [3, "Punchline must be at least 3 characters long"]
    }
});
const Joke = mongoose.model('Joke', JokeSchema);
module.exports = Joke;