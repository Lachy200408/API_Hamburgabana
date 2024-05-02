const http = require('node:http')
const menuJson = require('./menu.json')

const tipoJson = { 'Content-Type': 'application/json; charset=utf-8' }

function serverFucntion (req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*')

  if (req.method === 'GET') {
    switch (req.url) {
      case '/menu': {
        res.writeHead(200, tipoJson)
        res.end(JSON.stringify(menuJson))
        break
      }
      case '/menu/kinds': {
        const menuKindsJson = {
          menuKinds: Object.keys(menuJson)
        }

        res.writeHead(200, tipoJson)
        res.end(JSON.stringify(menuKindsJson))
        break
      }
      default: {
        res.writeHead(404, tipoJson)
        res.end(JSON.stringify({ message: 'No se encontro el resurso solicitado.' }))
      }
    }
  }
}

const server = http.createServer(serverFucntion)
server.listen(3000, () => {
  console.log('Server is running on http://localhost:3000')
})
