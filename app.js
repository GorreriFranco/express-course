const app = require('express')()
const logger = require('./logger')
// req => middleware => res

app.use('/api', logger)
// if you omit the path it's going to be applied to all the request BELOW
// more info about app.use() in https://expressjs.com/en/4x/api.html#app.use

app.get('/', (req, res)=>{
  res.send('Home')
})

app.get('/about', (req, res)=>{
  res.send('About')
})

app.get('/api/products', (req, res)=>{
  res.send('Products Resourse!')
})

app.get('/api/items', (req, res)=>{
  res.send('Items Resourse!')
})

app.put('/api/people/:id', (req, res)=>{
  const {id} = req.params
  const {name} = req.body
  console.log(id, name);
  res.send('Put Method Hit!')
})

app.listen(5000, ()=>{
  console.log('Server is listening on port 5000...');
})
