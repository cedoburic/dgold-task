const mongoose = require('mongoose');

const InventorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    quantity: {
        type: Number,
        required: true
    },
    status: {
        type: String,
        enum: ['in stock', 'ordered', 'issued'],
        default: 'in stock'
    }
});

module.exports = mongoose.model('Inventory', InventorySchema);
