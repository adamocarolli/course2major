const mongoose = require('mongoose');

const programSchema = new mongoose.Schema({
  id: { type: 'String', required: true },
  courses: [{ type: mongoose.Schema.ObjectId, ref: 'Course' }],
}, {
  toObject: { virtuals: true },
  toJSON: { virtuals: true },
});

module.exports = mongoose.model('Program', programSchema);
