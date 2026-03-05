const express = require('express');
const router = express.Router();
const Chalisa = require('../models/Chalisa');

// GET all chalisas
router.get('/', async (req, res) => {
  try {
    const chalisas = await Chalisa.find();
    res.json(chalisas);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST a new chalisa
router.post('/', async (req, res) => {
  const newChalisa = new Chalisa(req.body);
  try {
    const saved = await newChalisa.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
