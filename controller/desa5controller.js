let handlerdocuments = require ('../utils/handlerdocuments')

class Desa5Controller {
  constructor(){

  }

  async getAll(){
    try {
      return await handlerdocuments.getData()
    } catch (err) {
      console.log(err)
    }}

  async getRandom(){
    try {
      let response = await handlerdocuments.getData()
      let ultimoIndice = response.length

      let posicionAleatoria = Math.floor(Math.random()*3)
      return response[posicionAleatoria]

    } catch (err) {
      console.log(err)
    }}
    async createProduct({title, price, thumbnail, id}){
     
      try {
      let response = await handlerdocuments.getData()
      
      response.push({"title":title,"price":Number(price),"thumbnail":thumbnail,"id": Number(id)})
      
      await handlerdocuments.writeData(response)
    } catch (err) {
      console.log(err)
    }}
}
module.exports = new Desa5Controller(); //exportamos la clase ya instanciada