const mongoose = require('mongoose')

const ItemSchema = new mongoose.Schema({
  item: {
    type: String,
    required: true,
  },
  itemPrice:{
    type: Number,
    required: true,
  },
  userId: {
    type: String,
    required: true
  }
})


module.exports = mongoose.model('Item', ItemSchema)
