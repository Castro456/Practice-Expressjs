const express = require('express')
const app = express()

app.set('view engine', 'ejs') //static code
// app.use(logger)

// This middleware is used for calling static pages like html, css, js.
// Declare the folder name and access every files inside that folder.
app.use(express.static("public"))

app.get('/hello', (req, res) => {
  console.log('hello get method');
  // res.status(200).json({"message": "Hello for Express.js"}) //chain the status
  // res.download("server.js") //This will directly download the file 
  res.render('index', {text: 'ExpressJs'}) // normally this won't work bkx won't have view engine setup. ejs & pug are popular
})

app.get('/middle', logger, (req, res) => {
  //Now the logger middleware runs only for this route
  // To get the value from the url like this ?name=bus
  res.status(200).send(req.query.name)
})

const usersRouter = require("./routes/users")
app.use("/users", usersRouter)

function logger(req, res, next) {
  console.log(req.originalUrl);
  next()
}

app.listen(3000)

/**
 * npm cmds used:
 * 
 * To create package.json: npm init-y
 * Install express: npm i express
 * Save nodemon as dev: npm i --save-dev nodemon
 * Run a script: npm run devStart
 * Install ejs module for view rendering: npm i ejs
 * 
 */