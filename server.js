const express = require('express')
const app = express()

app.set('view engine', 'ejs') //static code
// app.use(logger)

app.get('/', (req, res) => {
  console.log('hello get method');
  // res.status(200).json({"message": "Hello for Express.js"}) //chain the status
  // res.download("server.js") //This will directly download the file 
  res.render('index', {text: 'ExpressJs'}) // normally this won't work bkx won't have view engine setup. ejs & pug are popular
})

app.get('/middle', logger, (req, res) => {
  //Now the logger middleware runs only for this route
  res.status(500).send('Middleware')
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