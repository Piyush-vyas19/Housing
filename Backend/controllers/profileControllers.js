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
      res.json({ name: user.name,phone: user.phone });
    } catch (error) {
      console.error('Error fetching user name:', error);
      res.status(500).json({ message: 'Server error' });
    }
  };

