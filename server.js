// server.js
const express = require('express');
const app = express();

// Define a route
app.get('/', (req, res) => {
  res.send('Hello, world!');
});

module.exports = app; // Export the Express app
