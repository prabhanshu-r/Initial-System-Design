const express = require('express');
const cors = require('cors'); // Allows the frontend to talk to a different port safely

const app = express();
const PORT = 3000;

// Middleware to automatically parse JSON payloads into request objects (req.body)
app.use(express.json()); 
app.use(cors()); 

// The API Endpoint Route
app.post('/api/verify-age', (req, res) => {
    // 1. The backend receives the form data out of the request object
    const { username, age } = req.body;

    console.log(`Received API request from: ${username}, Age: ${age}`);

    // 2. Guard Clause Logic: Validate inputs are present
    if (!username || age === undefined || isNaN(age)) {
        return res.status(400).json({ 
            error: "Invalid input. Please provide both a name and an age value." 
        });
    }

    // 3. Core Business Logic: Check if the user is an adult
    if (age >= 18) {
        // Send a 200 OK success status with custom response data
        return res.status(200).json({
            status: "approved",
            message: `Hello ${username}! Access granted. You are old enough.`
        });
    } else {
        // Send a 403 Forbidden status with alternate response data
        return res.status(403).json({
            status: "denied",
            error: `Sorry ${username}, you must be 18 or older to access this area.`
        });
    }
});

// Start the server to listen for requests
app.listen(PORT, () => {
    console.log(`Backend API Server running at http://localhost:${PORT}`);
});
