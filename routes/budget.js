const express = require('express')
const router = express.Router()
const budgetController = require('../controllers/budget') 
const { ensureAuth } = require('../middleware/auth')


router.post('/createBudget', budgetController.createBudget)

module.exports = router