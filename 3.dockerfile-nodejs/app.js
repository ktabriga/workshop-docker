const http = require('http')

http.createServer((req, res) => {
  res.writeHead(200, {'Content-type': 'text/plain'})
  console.log('get hello')
  res.end('Docker rocks')
}).listen(3000)

console.log('Servidor rodando em localhost:3000')
