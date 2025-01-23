const express = require('express')
const router = express.Router()

router.get("/", (req, res) => {
  res.status(200).send('Hello user')
})

router.get("/new", (req, res) => {
  res.status(200).send('Create user coming soon')
})

router
  .route("/:id")
  .get((req, res) => {
    res.status(200).send(`Hello ${req.user.name}`)
  })
  .post((req, res) => {
    res.status(200).send(`Create user ${req.params.id}`)
  })
  .put((req, res) => {
    res.status(200).send(`Update user ${req.params.id}`)
  })
  .delete((req, res) => {
    res.status(200).send(`Delete user ${req.params.id}`)
  })

const users = [{name: "Castro"}, {name: "Zac"}]

// When ever find a req with the parameter id first expressjs will run this function
router.param("id", (req, res, next, id) => { 
  //without next it will keep on loading inside param(). Bkz param() is a middleware
  req.user = users[id] //user is just a random variable
  console.log(id);
  next()
})

// router.get("/:id", (req, res) => { // this route will accept the the values also, so always write this routes below
//   // req.params.id // should be the same as above
//   res.status(200).send(`The user id is ${req.params.id}`)
// })

module.exports = router