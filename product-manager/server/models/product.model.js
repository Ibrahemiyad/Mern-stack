const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Title is required"],
        minlength: [3, "Title must be at least 3 characters long"]
    },
    price: {
        type: Number,
        required: [true, "Price is required"],
        min: [0, "Price must be at least 0"]
    },
    description: {
        type: String,
        required: [true, "Description is required"]
    }
}, { timestamps: true });

// The frontend validation code should not be added to the backend model file.
// Instead, create a separate file for frontend validation, such as `/Users/id/Desktop/Mern-stack/product-manager/client/utils/validation.js`:


const Product = mongoose.model("product", ProductSchema);
module.exports = { Product };