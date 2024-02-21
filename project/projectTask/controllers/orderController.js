const Order = require('../models/Order');
const User = require('../models/User');

exports.createOrder = async (req, res) => {
  try {
   
    // Check if the user exists
    const orderUser = await User.findById(user);
    if (!orderUser) {
      //401 is for the access 
      return res.status(401).json({ message: 'User not found. Please log in to create a new order.' });
    }

    // Create a new order
    const newOrder = await Order.create({
      user: req.body["user"],
      products: req.body["products"],
      total: req.body["total"],
      status: req.body["status"],
      payment: req.body["payment"]
    });

  return res.status(201).json({data: newOrder, message: "order succefully" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: err.message });
  }
};

exports.updateOrder = async (req, res) => {
  try {
    const updatedOrder = await Order.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!updatedOrder) {
      return res.status(404).json({ error: 'Order not found' });
    }

    res.json(updatedOrder);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteOrder = async (req, res) => {
  try {
    const deletedOrder = await Order.findByIdAndDelete(req.params.id);

    if (!deletedOrder) {
      return res.status(404).json({ error: 'Order not found' });
    }

    res.json(deletedOrder);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
