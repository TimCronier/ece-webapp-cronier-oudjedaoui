const aboutus = require('./content/about.json')
const express = require('express')
const fs = require('fs')
const router = express.Router()
const db = require('./db.js')
const userDB = require('./users.json')

let users =
  [
    {
      id: 1,
      name: "salut"
    },
    {
      id: 2,
      name: "luc"
    }
  ]

  let users2 =
  [
    {
      id: 1,
      name: "luc"
    }
  ]

let articles = 

  [
     {
        "id": 1,
        "author": "Tim",
        "title": "Pourquoi le soleil se lèvera à l'ouest ?",
        "content": "Raplume est revenu ce 21 octobre avec une nouvelle compilation intitulée \"Le soleil se lèvera à l'ouest\".\nAprès le \"Le chant des oiseaux\" sorti en 2020, le média revient avec un projet plus abouti que jamais. Derrière ce nom mystérieux se cache une direction artistique ambitieuse. J'ai eu l'occasion de discuter avec le fondateur du média Alvara pour parler du choix de cette direction.",
        "src_img": "https://t2.genius.com/unsafe/884x0/https%3A%2F%2Fimages.genius.com%2F757b0e4224cdd1b9f6f98dd15466c1d8.1000x1000x1.jpg"
     },
     {
        "id": 2,
        "author": "Tim",
        "title": "Comprendre les réfs dans Mojave Ghost",
        "content": ["\"J'rentre chez Gucci la vendeuse me suit partout, elle croit qu'elle va devenir Georgina\"", "\n  salut"],
        "src_img": "https://t2.genius.com/unsafe/302x302/https%3A%2F%2Fimages.genius.com%2F1a0dc265c33a4fae230ee5ae2c5f8793.1000x1000x1.jpg"
     }
  ]



router.get('/hello', (req, res) => {
  res.writeHead(300, { 'Content-Type': 'text/html' })
  res.end("Hello !")
})

router.get('/hello/:name', (req, res) => {
  res.writeHead(300, { 'Content-Type': 'text/html' })
  res.end("Hello " + req.params.name)
})

router.get('/db/users', (req, res) => {
  res.json(users);
})

router.get('/db/users/:useID', (req, res) => {
  res.json(users.find(user => user.id == req.params.useID))
})

router.get('/db/users2', (req, res) => {
  res.json(users2);
})






router.get('/db/articles', (req, res) => {
  res.json(articles);
})

router.get('/db/articles/:useID', (req, res) => {
  res.json(articles.find(article => article.id == req.params.useID))
})




router.get('/articles', (req, res) => {
  const searchId = '6ec0bd7f-11c0-43da-975e-2a8ad9ebae0b'
  const article = database.db.article.find(article => article.id === searchId)
  res.send("" + article.title)
})

router.get('/about', (req, res) => {
  /*
  fs.readFile('./content/about.json', 'utf8', (err, jsonString) => {
      if (err) {
          console.log("Error", err)
          return
      }
      aboutus = JSON.parse(jsonString)
      res.send(aboutus)
  })*/
  res.end(JSON.stringify(aboutus))
})



module.exports = router;





