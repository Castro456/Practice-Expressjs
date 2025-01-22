const express = require('express')
const router = express.Router()


router.get("/", (req, res) => {
  res.status(200).send('Hello user')
})

router.get("/new", (req, res) => {
  res.status(200).send('Create user coming soon')
})

router.get("/:id", (req, res) => { // this route will accept the the values also, so always write this routes below
  // req.params.id // should be the same as above
  res.status(200).send(`The user id is ${req.params.id}`)
})

module.exports = router