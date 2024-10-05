const express = require('express');
const cors = require('cors'); // To allow cross-origin requests

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors()); // Enable CORS
app.use(express.json()); // Parse JSON bodies

// Define a basic route
app.get('/', (req, res) => {
    res.send('Welcome to ScholarQuest API!');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
