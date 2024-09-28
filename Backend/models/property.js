const mongoose = require('mongoose');

// Define the Property schema
const propertySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  type: {
    type: String,
    enum: ['house', 'flat', 'villa'],
    required: true
  },
  description: {
    type: String,
    required: true,
    trim: true
  },
  sellerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // Assuming you have a User model for sellers
    required: true
  },
  address: {
    type: String,
    required: true,
    trim: true
  },
  furnished: {
    type: Boolean,
    default: false
  },
  beds: {
    type: Number,
    required: true,
    min: 1
  },
  baths: {
    type: Number,
    required: true,
    min: 1
  },
  price: {
    type: Number,
    required: true,
    min: 0
  }
}, {
  timestamps: true // Automatically adds createdAt and updatedAt timestamps
});

// Create the Property model
const Property = mongoose.model('Property', propertySchema);

module.exports = Property;
