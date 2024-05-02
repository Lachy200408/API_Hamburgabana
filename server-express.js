const express = require('express')
const menuJson = require('./menu.json')

const app = express()
app.disable('x-powered-by')

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', /*  'https://hamburgabana.onrender.com' ==> Es el origin oficial para la API */ '*')
  res.setHeader('Content-Type', 'application/json; charset=utf-8')
  next()
})

//* GET menu completo
app.get('/menu', (req, res) => {
  res.send(JSON.stringify(menuJson))
})

//* GET de los tipos de productos en el menu
app.get('/menu/kinds', (req, res) => {
  const menuKinds = {
    kinds: Object.keys(menuJson)
  }

  res.send(JSON.stringify(menuKinds))
})

//* GET del menu de un tipo de producto especifico
app.get('/menu/:kind', (req, res) => {
  const { kind } = req.params
  if (menuJson[kind]) {
    return res.send(menuJson[kind])
  }
  res.status(404).send(JSON.stringify({ message: 'Recurso no encontrado.' }))
})

//* GET de los items especificos
app.get('/menu/:kind/:id', (req, res) => {
  const { kind, id } = req.params

  //* Valida que exista el tipo de producto en el menu
  if (menuJson[kind]) {
    //* Valida que exista el id en el menu de ese tipo de producto
    const itemHamburguesa = menuJson[kind].find(hamburguesa => hamburguesa.id === id)
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
