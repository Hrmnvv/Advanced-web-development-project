const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();
const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Database Connection
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("MongoDB Connected..."))
    .catch(err => console.log(err));

// Sample Route
app.get('/', (req, res) => {
    res.send("API is running...");
});

// Product Route Example
app.get('/api/products', (req, res) => {
    const products = [
        { id: 1, name: 'Smartphone', price: 699 },
        { id: 2, name: 'Laptop', price: 1200 }
    ];
    res.json(products);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
