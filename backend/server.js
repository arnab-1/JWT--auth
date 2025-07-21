const express = require('express');
const app = express();
const authRoutes = require('./routes/authRoutes');
const dotenv = require('dotenv');

dotenv.config();
app.use(express.json());
const PORT = 7000;

app.use('/api/auth',authRoutes);

app.listen(PORT,() => {
    console.log(`Server is running on http://localhost:${PORT}`);
})