const express = require('express');
const router = express.Router();
const requestController = require('./controllers/requestController');

router.get('/requests', requestController.getAllRequests);
router.get('/requests/:id', requestController.getRequestById);
router.post('/requests', requestController.addRequest);
router.put('/requests/:id', requestController.updateRequest);
router.delete('/requests/:id', requestController.deleteRequest);
router.put('/requests/:id/approve', requestController.approveRequest);

module.exports = router;
