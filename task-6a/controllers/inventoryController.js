const Inventory = require('../models/Inventory');

exports.getAllInventory = async (req, res) => {
    try {
        const inventory = await Inventory.find();
        res.status(200).json(inventory);
    } catch (error) {
        res.status(500).json({ message: "Failed to fetch inventory." });
    }
};

exports.getSingleInventory = async (req, res) => {
    try {
        const item = await Inventory.findById(req.params.id);
        res.status(200).json(item);
    } catch (error) {
        res.status(404).json({ message: "Item not found." });
    }
};

exports.addInventory = async (req, res) => {
    try {
        const newItem = await Inventory.create(req.body);
        res.status(201).json(newItem);
    } catch (error) {
        res.status(400).json({ message: "Failed to add item." });
    }
};

exports.updateInventory = async (req, res) => {
    try {
        const updatedItem = await Inventory.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!updatedItem) {
            return res.status(404).json({ message: "Item not found." });
        }
        res.status(200).json(updatedItem);
    } catch (error) {
        res.status(400).json({ message: "Update failed." });
    }
};

exports.deleteInventory = async (req, res) => {
    try {
        const deletedItem = await Inventory.findByIdAndDelete(req.params.id);
        if (!deletedItem) {
            return res.status(404).json({ message: "Item not found." });
        }
        res.status(204).json(null);
    } catch (error) {
        res.status(400).json({ message: "Deletion failed." });
    }
};

