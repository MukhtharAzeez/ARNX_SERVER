const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description: {  
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    image: {
        type: [String],
        required: true,
    },
    currency: {
        type: String,
        required: true,
    }
})

const Product = mongoose.model('products',ProductSchema)
module.exports = Product