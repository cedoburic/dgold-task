const express = require('express');
const router = express.Router();
const inventoryController = require('./controllers/inventoryController');

router.get('/inventories', inventoryController.getAllInventories);
router.get('/inventories/:id', inventoryController.getInventoryById);
router.post('/inventories', inventoryController.addInventory);
router.put('/inventories/:id', inventoryController.updateInventory);
router.delete('/inventories/:id', inventoryController.deleteInventory);

module.exports = router;
