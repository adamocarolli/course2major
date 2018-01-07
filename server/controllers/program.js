const Program = require('../models/program');
const Course = require('../models/course');

module.exports = {
  /**
   * Get all programs
   * @param req
   * @param res
   * @returns void
   */
  getPrograms: (req, res) => {
    Program.find()
      .populate('courses')
      .exec((err, programs) => {
        if (err) {
          res.status(500).send(err);
        } else {
          res.status(200).json({ programs });
        }
      });
  },

  /**
   * Add a program
   * @param req
   * @param res
   * @returns void
   */
  addProgram: (req, res) => {
    const newProgram = new Program({ id: req.body.id });

    newProgram.save((err, saved) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.status(201).json(saved);
      }
    });
  },

  /**
   * Update a program
   * @param req
   * @param res
   * @returns void
   */
  updateProgram: (req, res) => {
    res.status(200);
    res.send(`PUT /api/programs/${req.params.id}`);
  },

  /**
   * Delete a program
   * @param req
   * @param res
   * @returns void
   */
  deleteProgram: (req, res) => {
    Program.findOne({ id: req.params.id }).exec((err, program) => {
      if (err) {
        res.status(500).send(err);
      } else {
        program.remove(() => {
          res.status(204).end();
        });
      }
    });
  },

  /**
   * Get a program
   * @param req
   * @param res
   * @returns void
   */
  getProgram: (req, res) => {
    Program.findOne({ id: req.params.id })
      .populate('courses')
      .exec((err, program) => {
        if (err) {
          res.status(500).send(err);
        } else {
          res.status(200).json(program);
        }
      });
  },

  /**
   * Add required course to program
   * @param req
   * @param res
   * @returns void
   */
  addCourse: (req, res) => {
    Course.findOne({ id: req.params.cid }).exec((findCourseErr, course) => {
      if (findCourseErr) {
        res.status(500).send(findCourseErr);
      } else {
        Program.findOneAndUpdate({ id: req.params.pid }, { $push: { courses: course } })
          .populate('courses')
          .exec((findAndUpdateProgramErr, program) => {
            if (findAndUpdateProgramErr) {
              res.status(500).send(findAndUpdateProgramErr);
            } else {
              res.status(200).json(program);
            }
          });
      }
    });
  },
};
