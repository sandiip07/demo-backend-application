require('dotenv').config()

const express = require('express')

const app = express()

const port = 5000



app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter' , (req, res) => {
    res.send('sandeep')
})

app.get('/insta' , (req,res) => {
 res.send("sandeep aur node")
})


app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})