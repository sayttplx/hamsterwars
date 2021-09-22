// Imports
const express = require('express');
const app = express();
const cors = require('cors');

// Set the port
const PORT = process.env.PORT || 8080;

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

// Logger
app.use((req, res, next) => {
	console.log(`${req.method} ${req.url}`);
	console.log(req.body);
	next();
})

// Routes
const hamstersRoute = require('./routes/hamsters.js');
app.use('/hamsters', hamstersRoute);

const matchesRoute = require('./routes/matches.js');
app.use('/matches', matchesRoute);

const laddersRoute = require('./routes/ladders');
app.use('/', laddersRoute);

const winnersRoute = require('./routes/winners');
app.use('/matchwinners', winnersRoute);


// Start the server
app.listen(PORT, () => {
	console.log(`Server is listening on port ${PORT}`);
});