const mongoose = require('mongoose');

const RequestSchema = new mongoose.Schema({
    department: {
        type: String,
        required: true
    },
    product: {
        type: mongoose.Schema.ObjectId,
        ref: 'Inventory',
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    approved: {
        type: Boolean,
        default: false
    },
    approvedBy: {
        type: mongoose.Schema.ObjectId,
        ref: 'User'
    }
});

module.exports = mongoose.model('Request', RequestSchema);
