const express = require('express')
const router = express.Router()

// usamos el método create de sequelize
// que nos hace un insert del usuario
const UserController = require('../controllers/UserController')

router.post('/', UserController.create)
router.get('/', UserController.getAll)
router.delete('/id/:id', UserController.delete)
router.put('/id/:id', UserController.update)


module.exports = router
