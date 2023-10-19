const Request = require('../models/Request');

exports.getAllRequests = async (req, res) => {
    try {
        const requests = await Request.find().populate('product');
        res.status(200).json(requests);
    } catch (error) {
        res.status(500).json({ message: "Failed to fetch requests." });
    }
};

exports.createRequest = async (req, res) => {
    try {
        const newRequest = await Request.create(req.body);
        res.status(201).json(newRequest);
    } catch (error) {
        res.status(400).json({ message: "Failed to create request." });
    }
};

exports.updateRequest = async (req, res) => {
    try {
        const updatedRequest = await Request.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true }).populate('product');
        if (!updatedRequest) {
            return res.status(404).json({ message: "Request not found." });
        }
        res.status(200).json(updatedRequest);
    } catch (error) {
        res.status(400).json({ message: "Update failed." });
    }
};

exports.deleteRequest = async (req, res) => {
    try {
        const deletedRequest = await Request.findByIdAndDelete(req.params.id);
        if (!deletedRequest) {
            return res.status(404).json({ message: "Request not found." });
        }
        res.status(204).json(null);
    } catch (error) {
        res.status(400).json({ message: "Deletion failed." });
    }
};

exports.approveRequest = async (req, res) => {
    try {
        let request = await Request.findById(req.params.id);
        if (!request) {
            return res.status(404).json({ message: "Request not found." });
        }
        request.approved = true;
        request.approvedBy = req.user._id;
        await request.save();

        res.status(200).json(request);
    } catch (error) {
        res.status(400).json({ message: "Approval failed." });
    }
};


