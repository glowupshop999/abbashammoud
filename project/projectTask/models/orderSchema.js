const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const OrderSchema = new Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User'
  },
  products: [
    {
      product: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Product'
      },
      quantity: {
        type: Number,
        required: true
      }
    }
  ],
  total: {
    type: Number,
    required: true
  },
  //the status order can be in progress or completed
  status: {
    type: String,
    enum: ['pending', 'processing', 'shipped', 'delivered'],
    default: 'pending',
    required: true,
  
  },
  //for the order
  payment: {
    type: String,
    enum: ['credit', 'debit', 'paypal'],
    required: true
  }
},
{timestamps: true}
);

module.exports  = mongoose.model('Order', OrderSchema);

