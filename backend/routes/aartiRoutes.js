const express = require('express');
const router = express.Router();
const Aarti = require('../models/Aarti');

// GET all aartis
router.get('/', async (req, res) => {
  try {
    const aartis = await Aarti.find();
    res.json(aartis);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST a new aarti
router.post('/', async (req, res) => {
  const newAarti = new Aarti(req.body);
  try {
    const saved = await newAarti.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
