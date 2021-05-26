const http = require('http')
const {readFileSync} = require('fs')

// get all files
const homePage = readFileSync('./navbar-app/index.html')
const homeStyles = readFileSync('./navbar-app/styles.css')
const homeImage = readFileSync('./navbar-app/logo.svg')
const homeLogic = readFileSync('./navbar-app/browser-app.js')

const server = http.createServer((req, res)=>{
  // console.log(req.method, req.url);
  const url = req.url
  console.log(url);
  if (url === '/'){
    res.writeHead(200, {'contentType': 'text/html'}) 
    res.write(homePage)
  }else if (url === '/styles.css'){
    res.writeHead(200, {'contentType': 'text/css'})
    res.write(homeStyles)
  }else if (url === '/browser-app.js'){
    res.writeHead(200, {'contentType': 'text/javascript'})
    res.write(homeLogic)
  }else if (url === '/logo.svg'){
    res.writeHead(200, {'contentType': 'image/svg+xml'})
    res.write(homeImage)
  }else{
    //404
    res.writeHead(404, {'contentType': 'text/html'})
    res.write('<h1>page not found</h1>')
  }
  res.end()
})

server.listen(5000)