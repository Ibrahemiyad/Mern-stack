const mongoose = require('mongoose');

const TeamSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required"],
        minlength: [2, "Name must be at least 2 characters"]
    },
    preferredPosition: {
        type: String
    },
    gameStatus: {
        game1: {
            type: String,
            enum: ['Undecided', 'Playing', 'Not Playing'],
            default: 'Undecided'
        },
        game2: {
            type: String,
            enum: ['Undecided', 'Playing', 'Not Playing'],
            default: 'Undecided'
        },
        game3: {
            type: String,
            enum: ['Undecided', 'Playing', 'Not Playing'],
            default: 'Undecided'
        }
    }
}, { timestamps: true });

const Team = mongoose.model('Team', TeamSchema);
module.exports = Team;
