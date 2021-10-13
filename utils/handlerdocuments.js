const fs = require('fs');
const path = require('path');
const { stringify } = require('querystring');

class HandlerDocuments{
  constructor(){
    this.absoluteroute = path.resolve(__dirname, '../resources','productos.txt')
    
  }

  async getData(){
    try {
          
      return JSON.parse(await fs.promises.readFile(`${this.absoluteroute}`, 'utf-8'))
      
    } catch (e) {
      console.log('no se pude leer el archivo: ' + e)
    }
  }
  async writeData(newJson){
    let newData = JSON.stringify(newJson, null, 2)
    try {
          
      await fs.promises.writeFile(`${this.absoluteroute}`, newData)
      
    } catch (e) {
      console.log('no se pude escribir el archivo: ' + e)
    }
  }



}

module.exports = new HandlerDocuments ()