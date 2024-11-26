require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/database');
const authRoutes = require('./routes/authRoutes');

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Database connection
connectDB();

// Routes
app.use('/api/auth', authRoutes);

// Rota de teste para a raiz
app.get('/', (req, res) => {
    res.send('Servidor funcionando!');
  });

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
