const express = require('express')
const router = express.Router()



const  getAllHamsters  = require('../scripts/getAllHamsters').getAllHamsters
const  getHamsterById  = require('../scripts/getHamsterById').getHamsterById
const  getRandomHamster  = require('../scripts/getRandomHamster').getRandomHamster

// GET /hamsters
router.get('/', async (req, res) => {
	const hamsters = await getAllHamsters();
	res.send(hamsters);
});


// GET /hamsters/random
router.get('/random', async (req, res) => {
	const random = await getRandomHamster();
	res.send(random);
});


// GET /hamsters/:id
router.get('/:id', async (req, res) => {
	id = req.params.id;
	const hamsterId = await getHamsterById(id);
	res.send(hamsterId);
});


// GET /hamsters/cutest

// POST /hamsters

// PUT /hamsters/:id


module.exports = router

