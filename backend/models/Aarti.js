const mongoose = require("mongoose");

const aartiSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  slug: String,
  content: {
    type: String,
    required: true,
  },
  image: String,
});

module.exports = mongoose.model("Aarti", aartiSchema);
