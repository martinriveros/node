let handlerPrevious = require ('../utils/handlerPrevious')

class Controller {

  async getAll(){
    try {
      return await handlerPrevious.getData()
    } catch (err) {
      console.log(err)
    }}

  async getRandom(){
    try {
      let response = await handlerPrevious.getData()
      
      let posicionAleatoria = Math.floor(Math.random()*10)
      return response[posicionAleatoria]

    } catch (err) {
      console.log(err)
    }}
    
}
module.exports = new Controller(); //exportamos la clase ya instanciada