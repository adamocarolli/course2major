const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
  id: { type: 'String', required: true },
}, {
  toObject: { virtuals: true },
  toJSON: { virtuals: true },
});

// Define many-to-many relationship between programs and courses.
// Persistant courses array chosen in program schema to conserve storage space.
// As a program can have only a few course requirements,
// but a course can be a requirement for hundreds of programs.
courseSchema.virtual('programs', {
  ref: 'Program',
  localField: '_id',
  foreignField: 'courses',
});

module.exports = mongoose.model('Course', courseSchema);
