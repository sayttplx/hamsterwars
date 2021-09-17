// Imports
const express = require('express');
const app = express();
const cors = require('cors');

const hamstersRoute = require('./routes/hamsters.js');


// Set the port
const PORT = process.env.PORT || 8080;;

// Middleware
app.use( express.urlencoded({ extended: true }) )
app.use( express.json() )
app.use( cors())



// Logger
app.use( (req, res, next) => {
	console.log(`${req.method} ${req.url}`)
	console.log(req.body)
	next()
})


// Routes
app.use('/hamsters', hamstersRoute);




// Start the server
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});