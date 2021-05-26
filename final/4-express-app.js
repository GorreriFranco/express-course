const express = require('express')
const path = require('path')
const app = express()

// setup static and middleware
app.use(express.static('./public'))

// app.get('/', (req, res)=>{
//   res.sendFile(path.resolve(__dirname, './navbar-app/index.html'))
// })
/*
  Adding index.html to './public' 
  there's no need to serve the file in a GET request 
  pointing to the '/' root path
  */
app.all('*', (req, res)=>{
  res.status(404).send('resourse not found')
})
app.listen(5000, ()=>{
  console.log('server is listening on port 5000...');
})
