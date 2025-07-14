const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    title: { type: String,required: [true, 'title is required'] },
    price: { type: Number, required: [true, 'price is required'] },
    description: { type: String, required: [true, 'description is required']},
}, { timestamps: true });

// The frontend validation code should not be added to the backend model file.
// Instead, create a separate file for frontend validation, such as `/Users/id/Desktop/Mern-stack/product-manager/client/utils/validation.js`:

function validateProductForm(data) {
    const errors = {};
    
    if (!data.title || data.title.trim() === '') {
        errors.title = 'Title is required';
    }
    
    if (!data.price || isNaN(data.price) || data.price <= 0) {
        errors.price = 'Price must be a positive number';
    }
    
    if (!data.description || data.description.trim() === '') {
        errors.description = 'Description is required';
    }
    
    return errors;
}

const Product = mongoose.model("product", ProductSchema);
module.exports = { validateProductForm , Product };