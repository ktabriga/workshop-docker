const http = require('http')

http.createServer((req, res) => {
  res.writeHead(200, {'Content-type': 'text/plain'})
  console.log('get hello')
  const MONGO_HOST = process.env.MONGO_HOST
  const MONGO_PORT = process.env.MONGO_PORT
  const MONGO_USER = process.env.MONGO_USER
  const MONGO_PASSWORD = process.env.MONGO_PASSWORD
  res.end(`Conectar no banco
    ${MONGO_HOST}
    ${MONGO_PORT}
    ${MONGO_USER}
    ${MONGO_PASSWORD}
  `)
}).listen(3000)

console.log('Servidor rodando em localhost:3000')
