const express = require('express')
const router = express.Router()
const itemsController = require('../controllers/items') 
const { ensureAuth } = require('../middleware/auth')

router.get('/', ensureAuth, itemsController.getItems)

router.post('/createItem', itemsController.createItem)

router.delete('/deleteItem', itemsController.deleteItem)

module.exports = router