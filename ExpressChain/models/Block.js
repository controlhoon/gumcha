const mongoose = require('mongoose');

// Define Schemes
const blockSchema = new mongoose.Schema({
    hash: String,
    previoushash: String,
    index: {type: Number, unique: true },
    timestamp: Number,
    carNoanddata : String,
    carHash: String
},
{
  timestamps: true
});

// Create Model & Export
module.exports = mongoose.model('block', blockSchema);