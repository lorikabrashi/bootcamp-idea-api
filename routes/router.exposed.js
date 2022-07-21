const express = require('express')
const router = express.Router()
const { jsonResponse } = require('../utils/helpers')
const authController = require('../controllers/controller.auth')

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' })
})

router.post('/login', async (req, res) => {
  try {
    const result = await authController.login(req.body)
    res.json(jsonResponse(result))
  } catch (err) {
    res.json(jsonResponse(err.message, false))
  }
})

module.exports = router
