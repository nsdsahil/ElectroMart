const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    "custom-div-title": String,
    "img-fluid-product-src": {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    "final-price-display": String,
    "money": String,
    category: String
})
const Product = mongoose.model("Product", productSchema);

module.exports = Product



