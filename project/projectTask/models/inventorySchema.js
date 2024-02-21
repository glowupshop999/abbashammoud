const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const InventorySchema = new Schema({
  product: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'Product'
  },
  quantity: {
    type: Number,
    required: true
  }
},
{timestamps: true}
);

module.exports  = mongoose.model('Inventory', InventorySchema);

