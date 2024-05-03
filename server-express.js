const express = require('express')
const menuJson = require('./menu.json')

const app = express()
app.disable('x-powered-by')

// const ALLOWED_SITES = [
//   'https://hamburgabana.onrender.com',
//   'http://localhost:8080'
// ]

app.use((req, res, next) => {
  // const origin = req.header('origin')
  // if (ALLOWED_SITES.includes(origin) || !origin) {
  //   res.setHeader('Access-Control-Allow-Origin', origin)
  // }

  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Content-Type', 'application/json; charset=utf-8')
  next()
})

//* GET menu completo
app.get('/menu', (req, res) => {
  res.send(JSON.stringify(menuJson))
})

//* GET de los tipos de productos en el menu
app.get('/menu/kinds', (req, res) => {
  const menuKinds = menuJson.map(menu => {
    const { kind, thumbnail } = menu
    return { kind, thumbnail }
  })

  res.send(JSON.stringify(menuKinds))
})

//* GET del menu de un tipo de producto especifico
app.get('/menu/:kind', (req, res) => {
  const { kind } = req.params
  const menuSelected = menuJson.find(menu => menu.kind === kind)

  if (menuSelected) {
    return res.send(menuSelected)
  }
  res.status(404).send(JSON.stringify({ message: 'Recurso no encontrado.' }))
})

//* GET de los items especificos
app.get('/menu/:kind/:id', (req, res) => {
  const { kind, id } = req.params
  const menuSelected = menuJson.find(menu => menu.kind === kind)

  //* Valida que exista el tipo de producto en el menu
  if (menuSelected) {
    //* Valida que exista el id en el menu de ese tipo de producto
    const itemHamburguesa = menuSelected.products.find(hamburguesa => hamburguesa.id === id)
    if (itemHamburguesa) {
      return res.send(JSON.stringify(itemHamburguesa))
    }
  }
  res.status(404).send(JSON.stringify({ message: 'Recurso no encontrado' }))
})

app.use((req, res) => {
  res.status(404).send(JSON.stringify({ message: 'Recurso no encontrado.' }))
})

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000')
})
