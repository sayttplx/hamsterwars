const express = require('express')
const router = express.Router()


// const getAllHamsters = require('../scripts/getAllHamsters').getAllHamsters
// const getHamsterById = require('../scripts/getHamsterById').getHamsterById
// const getRandomHamster = require('../scripts/getRandomHamster').getRandomHamster
// const getCutestHamster = require('../scripts/getCutestHamster').getCutestHamster
// const addOneHamster = require('../scripts/addOneHamster').addOneHamster
// const updateOneHamsterById = require('../scripts/updateOneHamsterById').updateOneHamsterById
// const deleteHamsterById = require('../scripts/deleteHamsterById').deleteHamsterById

const {
	getAllHamsters,
	getRandomHamster,
	getHamsterById,
	updateOneHamsterById,
	deleteOneHamsterById,
	getCutestHamster,
	addOneHamster,
} = require('../controller/hamsterControllers')

// GET /hamsters
router.get('/', getAllHamsters)


// GET /hamsters/random
router.get('/random', getRandomHamster)

// GET /hamsters/cutest
router.get('/cutest', getCutestHamster)


// GET /hamsters/:id
router.get('/:id', getHamsterById)


// POST /hamsters
router.post('/', addOneHamster)

// PUT /hamsters/:id
router.put('/:id', updateOneHamsterById)

// DELETE /hamsters/:id
router.delete('/:id', deleteOneHamsterById)


module.exports = router

