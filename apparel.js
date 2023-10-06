// server.js

const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const port = process.env.PORT || 8000;

// Middleware to parse form data
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files (CSS, images, etc.)
app.use(express.static(path.join(__dirname, 'public')));

// Define a route for your form
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Handle form submission
app.post('/submit', (req, res) => {
  // Handle form submission logic here
  const formData = req.body;
  // You can access form data like formData.name, formData.email, etc.

  // Example: Send a response back to the client
  res.send('Form submitted successfully!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
