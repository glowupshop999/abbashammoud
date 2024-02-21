const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  category: {
    type: String,
    enum: ['electronics', 'clothing', 'books'],
    required: true
  }
},
{timestamps: true}
);

module.exports = mongoose.model('Product', ProductSchema);

