const express = require('express');
const app = express();
const authRoutes = require('./routes/authRoutes');
const dotenv = require('dotenv');
const cors = require('cors');
dotenv.config();
app.use(express.json());


app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true
}));

const PORT = 7000;

app.use('/api/auth',authRoutes);

app.listen(PORT,() => {
    console.log(`Server is running on http://localhost:${PORT}`);
})