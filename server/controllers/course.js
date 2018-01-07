const Course = require('../models/course');

module.exports = {
  /**
   * Get all courses
   * @param req
   * @param res
   * @returns void
   */
  getCourses: (req, res) => {
    Course.find()
      .populate('programs')
      .exec((err, courses) => {
        if (err) {
          res.status(500).send(err);
        } else {
          res.status(200).json({ courses });
        }
      });
  },

  /**
   * Add a course
   * @param req
   * @param res
   * @returns void
   */
  addCourse: (req, res) => {
    const newCourse = new Course({ id: req.body.id });

    newCourse.save((err, saved) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.status(201).json(saved);
      }
    });
  },

  /**
   * Update a course
   * @param req
   * @param res
   * @returns void
   */
  updateCourse: (req, res) => {
    res.status(200);
    res.send(`PUT /api/courses/${req.params.id}`);
  },

  /**
   * Delete a course
   * @param req
   * @param res
   * @returns void
   */
  deleteCourse: (req, res) => {
    Course.findOne({ id: req.params.id }).exec((err, course) => {
      if (err) {
        res.status(500).send(err);
      } else {
        course.remove(() => {
          res.status(204).end();
        });
      }
    });
  },
};
