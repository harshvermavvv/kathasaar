const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// 👉 Import routes
const aartiRoutes = require('./routes/aartiRoutes');
const chalisaRoutes = require('./routes/chalisaRoutes');
const vratRoutes = require('./routes/vratRoutes');

// 👉 Use routes
app.use('/api/aarti', aartiRoutes);
app.use('/api/chalisa', chalisaRoutes);
app.use('/api/vratkatha', vratRoutes);

// DB Connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("✅ MongoDB connected"))
.catch(err => console.log("❌ MongoDB connection error:", err));

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
});
