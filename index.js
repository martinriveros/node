const express = require('express');
const desa5Controller = require ('./controller/desa5controller') // ya viene instanciado desde la exportacion
let app = express();
let cors = require('cors')

const PORT = 8080;

app.use(cors('*'))

app.get(("/"), async (req, res)=>{
  res.send('alguien entro al server')
})

app.get(("/productos"), async (req, res)=>{
  let response = await desa5Controller.getAll()
  res.json(response)
})
app.get(("/productoRandom"), async (req, res)=>{
  let response = await desa5Controller.getRandom()
  res.json(response)
})

app.post(("/nuevoProducto"), async (req, res)=>{
  await desa5Controller.createProduct(req.query)
  let finalResult = await desa5Controller.getAll()
  res.send(finalResult)
})


app.listen(PORT, ()=>{
  console.log(`servidor funcionando correctamente en ${PORT}`)
})