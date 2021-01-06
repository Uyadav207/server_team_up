const mongoose = require('mongoose')

const projectSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  prototype_link: {
    type: String,
    required: true
  },
  images: {
    type: String,
    required: true,
  },
  github: {
    type: String,
    required: true
  },
  join_link: {
    type: String,
    required: true
  },
  contact: {
    type: String,
    required: true
  },
  createAt: {
    type: Date,
    default: Date.now
  }   
})

mongoose.model('Project', projectSchema);
