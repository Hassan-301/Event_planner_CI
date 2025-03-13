const express = require("express");
const Event = require("../models/Event");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

// Create Event
router.post("/", authMiddleware, async (req, res) => {
    try {
        const event = new Event({ ...req.body, user: req.user.userId });
        await event.save();
        res.status(201).json(event);
    } catch (err) {
        res.status(500).json({ message: "Server error" });
    }
});

// Get All Events for User
router.get("/", authMiddleware, async (req, res) => {
    try {
        const events = await Event.find({ user: req.user.userId }).sort("date");
        res.json(events);
    } catch (err) {
        res.status(500).json({ message: "Server error" });
    }
});

module.exports = router;
