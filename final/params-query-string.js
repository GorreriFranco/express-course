
const { query } = require('express')
const express = require('express')
const app = express()
const {products} = require('./data')

app.get('/', (req, res)=>{
  res.send('<h1>Home Page</h1><a href="/api/products">products</a>')
})

app.get('/api/products', (req, res)=>{
  const liteProducts = products.map((product)=>{
    const {id, name, image} = product
    return {id, name, image}
  })
  return res.json(liteProducts)
})

app.get('/api/products/:productID', (req, res)=>{
  const {productID} = req.params
  const singleProduct = products.find((product) => product.id === Number(productID))
  if (!singleProduct){
    return res.status(404).send(`Product with ID: ${productID} not found`)
  }
  return res.json(singleProduct)
})

app.get('/api/v1/query', (req, res)=>{
  // console.log(req.query);
  const {search, limit} = req.query
  let sortedProducts = [...products]
  if (search){
    sortedProducts = sortedProducts.filter(product => product.name.startsWith(search))
  }
  if (limit){
    console.log(limit);
    sortedProducts = sortedProducts.slice(0,Number(limit))
  }
  if (sortedProducts.length < 1){
    // res.status(200).send('No products matched your search')
    return res.status(200).json({sucess: true, data: []}) //A pretty common practice
  }
  return res.status(200).json(sortedProducts)
})

app.listen(5000, ()=>{
  console.log('server is listening on port 5000...');
})

// https://expressjs.com/en/4x/api.html#res.json