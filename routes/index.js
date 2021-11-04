const router = require('express').Router()
const { getUsers, getUserById } = require('./users')
const users = require('../users.json') // use fs if read from file - ok if from db

router.get("/", getUsers)

// router.get("/", (req, res) => {
//   console.log(req)
// })

router.get("/:id", (req, res) => {
  console.log(req)
})

module.export = router
