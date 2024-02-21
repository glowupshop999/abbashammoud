const Order = require('../models/Order');
const User = require('../models/User');

exports.createUser = async (req, res) => {
  try {

    // Check if the user exists
    const orderUser = await User.findById(user);
    if (!orderUser) {
      //401 is for the access 
      return res.status(401).json({ message: 'User not found. Please log in to create a new order.' });
    }

    // Create a new order
    const newUser = await User.create({
      name: req.body["name"],
      email: req.body["email"],
      role: req.body["role"],
      password: req.body["password"],
     
    });

  return res.status(201).json({data: newUser, message: "user succefully" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: err.message });
  }
};

exports.updateUser = async (req, res) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!updatedUser) {
      return res.status(404).json({ error: 'user not found' });
    }

    res.json(updatedUser);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteUser = async (req, res) => {
  try {
    const deleteUser = await User.findByIdAndDelete(req.params.id);

    if (!deleteUser) {
      return res.status(404).json({ error: 'user not found' });
    }

    res.json(deleteUser);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
