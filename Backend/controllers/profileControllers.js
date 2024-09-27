const User = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const JWT_SECRET = '88383a1';

exports.nameget = async (req, res) => {
    const { email } = req.params;
    console.log('Received email:', email) // Extract the email from the request parameters
  
    try {
      // Find the user in the database by email
      const user = await User.findOne({ email });
  
      // Check if the user exists
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
  
      // Return the user's name
      res.json({
        name: user.name,
        phone: user.phone,
        location: user.location,
        preferredPropertyType: user.preferredPropertyType,
        budgetRange: user.budgetRange,
        preferredLocations: user.preferredLocations
      });
    } catch (error) {
      console.error('Error fetching user name:', error);
      res.status(500).json({ message: 'Server error' });
    }
  };



// Controller function to update user details
exports.updateUser = async (req, res) => {
  const email = req.params.email; // Extracting email from URL parameters
  const updatedDetails = req.body; // Getting updated user details from request body

  try {
    // Find the user by email and update the details
    const updatedUser = await User.findOneAndUpdate(
      { email: email }, // Query to find the user by email
      { $set: updatedDetails }, // Set the updated details
      { new: true, runValidators: true } // Return the updated document, and run validators
    );

    // If the user is not found, return an error
    if (!updatedUser) {
      return res.status(404).json({ message: 'User not found' });
    }

    // If the update is successful, send the updated user details as the response
    res.status(200).json({ message: 'User updated successfully', user: updatedUser });
  } catch (error) {
    // Handle any errors that occur during the update process
    console.error('Error updating user:', error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};




