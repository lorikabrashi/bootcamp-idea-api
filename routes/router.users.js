const express = require('express')
const router = express.Router()
const userController = require('../controllers/controllers.users')
const {jsonResponse} = require('../utils/helpers')
/* GET users listing. */
router.get('/', function (req, res, next) {
  res.json('testing')
})

router.post('/create', async (req, res) => {
  try {
    const result = await userController.createUser(req.body)
    res.json(jsonResponse(result))
  } catch (err) {
    res.json(jsonResponse(err.message, false))
  }
})

module.exports = router
