//  models deal with databases
// The model is responsible for managing the data of the application. It receives user input from the controller.

const products = require('../data/products.json')

function findAll() {
  return new Promise((resolve, reject) => {
    resolve(products)
  })
}

function findById(id) {
  return new Promise((resolve, reject) => {
    const product = products.find((p) => p.id === id)
    resolve(product)
  })
}

module.exports = {
  findAll,
  findById
}