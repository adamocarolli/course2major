const router = require('express').Router();
const CourseController = require('../../controllers/course');

// Get all courses
router.get('/api/courses', CourseController.getCourses);

// Add a course
router.post('/api/courses', CourseController.addCourse);

// Update a course
router.put('/api/courses/:id', CourseController.updateCourse);

// Delete a course
router.delete('/api/courses/:id', CourseController.deleteCourse);

module.exports = router;
