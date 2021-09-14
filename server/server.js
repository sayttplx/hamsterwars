// Imports
const express = require('express');
const app = express();

// Set the port
const PORT = 8080;

// Middleware
app.use((req, res, next) => {
	console.log(`${req.method}`);
	next()
})

// Routes
app.get('/', (req, res) => {
  res.send('Hello cute hamsters!');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});