const express = require('express');
const Controller = require ('./controller/controller') // ya viene instanciado desde la exportacion
let app = express();
let cors = require('cors')

const PORT = 8080;

app.use(cors('*'))

app.get(("/"), async (req, res)=>{
  res.send('alguien entro al server')
})

app.get(("/productos"), async (req, res)=>{
  let response = await Controller.getAll()
  res.json(response)
})
app.get(("/productoRandom"), async (req, res)=>{
  let response = await Controller.getRandom()
  res.json(response)
})

app.listen(PORT, ()=>{
  console.log(`servidor funcionando correctamente en ${PORT}`)
})
