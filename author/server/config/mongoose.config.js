const mongoose = require('mongoose');
require('dotenv').config();
const dbname = process.env.DB;
const username  = process.env.ATLAS_USERNAME;
const password = process.env.ATLAS_PASSWORD;

const uri = `mongodb+srv://${username}:${password}@cluster0.agthsqt.mongodb.net/${dbname}?retryWrites=true&w=majority&appName=Cluster0`;

mongoose.connect(uri)
    .then(() => console.log("Connected to MongoDB"))
    .catch(err => console.error(" Error connecting to MongoDB", err));
