const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PromotionSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  startDate: {
    type: Date,
    required: true
  },
  endDate: {
    type: Date,
    required: true
  },
  discount: {
    type: Number,
    required: true
  },
  product: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product',
    required: true
  }
},
{timestamps: true}
);

module.exports = mongoose.model('Promotion', PromotionSchema);

