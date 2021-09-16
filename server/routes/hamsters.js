const express = require('express')
const router = express.Router()



const getAllHamsters = require('../scripts/getAllHamsters').getAllHamsters
const getHamsterById = require('../scripts/getHamsterById').getHamsterById
const getRandomHamster = require('../scripts/getRandomHamster').getRandomHamster
const getCutestHamster = require('../scripts/getCutestHamster').getCutestHamster
const addOneHamster = require('../scripts/addOneHamster').addOneHamster

// GET /hamsters
router.get('/', async (req, res) => {
	const hamsters = await getAllHamsters();
	res.send(hamsters);
});


// GET /hamsters/random
router.get('/random', async (req, res) => {
	const random = await getRandomHamster();
	if (random) {
		res.send(random);
	} else {
		res.sendStatus(404);
	}
});

// GET /hamsters/cutest
router.get('/cutest', async (req, res) => {
	const cutest = await getCutestHamster();
	if(cutest) {
		res.send(cutest);
	} else {
		res.sendStatus(404);
	}
});


// GET /hamsters/:id
router.get('/:id', async (req, res) => {
	id = req.params.id;
	const hamsterId = await getHamsterById(id);
	if (hamsterId) {
		res.send(hamsterId);
	} else {
		res.sendStatus(404);
	}
});


// POST /hamsters
router.post('/', async (req, res) => {
	const hamster = req.body;
	const newHamster = await addOneHamster(hamster);
	if (newHamster) {
		res.send(newHamster);
	} else {
		res.sendStatus(404);
	}
});

// PUT /hamsters/:id


module.exports = router
