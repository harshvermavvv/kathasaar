const express = require('express');
const router = express.Router();
const VratKatha = require('../models/VratKatha');

// GET all vrat kathas
router.get('/', async (req, res) => {
  try {
    const vratKathas = await VratKatha.find();
    res.json(vratKathas);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST a new vrat katha
router.post('/', async (req, res) => {
  const newVrat = new VratKatha(req.body);
  try {
    const saved = await newVrat.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
