const express = require('express')
const router = express.Router()


router.get("/", (req, res) => {
  res.status(200).send('Hello user')
})

router.get("/new", (req, res) => {
  res.status(200).send('Create user coming soon')
})

module.exports = router