const router = require('express').Router()

const users = require('../users.json') // use fs if read from file - ok if from db

router.get("/", (req, res) => {
  console.log(req)
})

module.export = router
