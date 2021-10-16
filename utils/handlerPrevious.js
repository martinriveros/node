const fs = require('fs');
const path = require('path');

class Contenedor {
  constructor(){
    this.absoluteroute = path.resolve(__dirname, '../resources','productos.txt')
  }

  async save(product) {
      
    const products = await this.getAll();
    console.log(products)
    if(products.length===0){
      product.id=1
    } else {
      product.id = products[products.length-1].id+1
    }
    
    products.push(product)
    
    let newData = JSON.stringify(products)
    
    await this.writeFile(newData)
    
  }
  async getData(){
    try {
          
      return JSON.parse(await fs.promises.readFile(`${this.absoluteroute}`, 'utf-8'))
      
    } catch (e) {
      console.log('no se pude leer el archivo: ' + e)
    }
  }
  async getById(id) {
      const products = await this.getAll();
      const product = products.find(element=> element.id===id)
      if(product===undefined){
        console.log(null)
      } else {
        console.log(product)
        
      }
      return product
  }
      
  
  async deleteById(id){
    
    const products = await this.getAll();
    
    const index = products.find((element, index) => {element.id===id
    return index})
    products.splice(index,1)
    
    await this.writeFile(products)

  }
  async deleteAll(){
    await this.writeFile('[]')
  }

  async writeFile(data){
    
    try {
      await fs.promises.writeFile(`${this.absoluteroute}`, data, 'utf-8')
 
    } catch (err) {
      console.log('error al escribir' + err)
      }
      }
    }

module.exports = new Contenedor ()