/*
  HTTP VERBS             EXPRESS
  GET    - Read   Data   app.get
  POST   - Insert Data   app.post
  PUT    - Update Data   app.put
  DELETE - Delete Data   app.delete
  */

//app.all
//app.use is for middleware
//app.listen

// const app = require('express')() it's the same as below but shortter
const express = require('express')
const app = express()

app.get('/', (req, res)=>{
  console.log('User hit the resource');
  res.status(200).send('Home Page')
})

app.get('/about', (req, res)=>{
  console.log('User hit the About resource');
  res.status(200).send('About Page')
})

app.all('*', (req, res)=>{
  res.status(404).send('<h1>Resource not found</h1>')
})

app.listen(5000, ()=>{
  console.log('Server is listening on port 5000...');
})

