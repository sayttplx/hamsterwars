const express = require('express')
const router = express.Router()




// GET /matches
router.get('/', (req, res) => {})

// GET /winners
router.get('/winners', (req, res) => {})

// GET /losers
router.get('/losers', (req, res) => {})

// GET //matchWinners/:id
router.get('/matchWinners/:id', (req, res) => {})

// GET /matches/:id
router.get('/matches/:id', (req, res) => {})

// POST /matches
router.post('/matches', (req, res) => {})

// DELETE /matches/:id
router.delete('/matches/:id', (req, res) => {})




module.exports = router