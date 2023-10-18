// controllers handle statuses and data that is being sent
// The controller responds to the user input and performs interactions on the data model objects. The controller receives the input, optionally validates it and then passes the input to the model.

const Product = require('../models/productModel')


// @desc    Gets all products
// @route   GET /api/product
async function getProducts(req, res) {
  try {
    const products = await Product.findAll()

    res.writeHead(200, { 'Content-Type': 'application/json' })
    res.end(JSON.stringify(products))

  } catch (error) {
    console.log(error)
  }
}


// @desc    Gets single product
// @route   GET /api/product/:id
async function getProduct(req, res, id) {
  try {
    const product = await Product.findById(id)

    if(!product) {
      res.writeHead(400, { 'Content-Type': 'application/json' })
      res.end(JSON.stringify({ message: `Product ID ${id} does not exist` }))

    } else {
      res.writeHead(200, { 'Content-Type': 'application/json' })
      res.end(JSON.stringify(product))

    }


  } catch (error) {
    console.log(error)
  }
}


// @desc    Creates a new product
// @route   Post /api/product
async function createProduct(req, res) {
  try {
    const product = {
      title: '',
      description: '',
      price: 100
    }

  } catch (error) {
    console.log(error)
  }
}

module.exports = {
  getProducts,
  getProduct,
  createProduct
}