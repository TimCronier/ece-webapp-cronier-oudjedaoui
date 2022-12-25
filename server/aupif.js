const express = require('express')
const app = express()
const port = 8080
const database = require('./db.js')

let users = {
  users: {
    id: 1,
    name: "salut"
  }
}

app
  .get('/', (req, res) => {
      res.send('Hello World!')
  })

  .get('/hello', (req, res) => {
    res.send('Hello buddy !')
  })

  .get('/hello/:name', (req, res) => {
    res.send("Hello " + req.params.name)
  })

  .get('/db', (req, res) => {
    res.json(users)
  })

app
  .post('/', (req, res) => {
    // post
  })

  .delete('/', (req, res) => {
    // delete
  })

  .put('/', (req ,res) => {
    // put
  })

// app.get('/articles', (req, res) => {
//   const searchId = '6ec0bd7f-11c0-43da-975e-2a8ad9ebae0b'
//   const article = database.db.article.find(article => article.id === searchId)
//   res.send(""+article.title)
// })




app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})

module.exports = router;