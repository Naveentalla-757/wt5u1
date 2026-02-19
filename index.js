const express = require('express');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Cycle 3 Program 2 - Environment Variables Working!');
});

app.get('/config', (req, res) => {
    res.json({
        PORT: process.env.PORT,
        DB_HOST: process.env.DB_HOST,
        DB_USER: process.env.DB_USER,
        API_KEY: process.env.API_KEY
    });
});

// 404 Route
app.use((req, res) => {
    res.status(404).send("404 - Page Not Found");
});

app.listen(port, () => {
    console.log("=================================");
    console.log("Server Started Successfully 🚀");
    console.log(`Running at http://localhost:${port}`);
    console.log("=================================");
});
