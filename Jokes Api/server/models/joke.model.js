const mongoose = require('mongoose');

const JokeSchema = new mongoose.Schema({
  setup: {
    type: String,
    required: [true, "Setup is required"],
    minlength: [3, "Setup must be at least 3 characters long"]
  },
  punchline: {
    type: String,
    required: [true, "Punchline is required"],
    minlength: [3, "Punchline must be at least 3 characters long"]
  }
}, { timestamps: true }); // ✅ أضف هذا القوس

// ✅ استخدم اسم واضح ومناسب
const Joke = mongoose.model('Joke', JokeSchema);

module.exports = Joke;