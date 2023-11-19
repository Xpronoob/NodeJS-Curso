import http from 'http' // Protocolo HTTP
import { findAvailablePort } from './9.free-port.js'

// console.log(process.env)

const desiredPort = process.env.PORT ?? 3333

const server = http.createServer((req, res) => {
  console.log('request received')
  res.end('Hola mundo')
})

findAvailablePort(desiredPort).then(port => {
  server.listen(port, () => {
    console.log(`Server listening on port http://localhost:${port}`)
  })
})
