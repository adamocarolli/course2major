const Program = require('../models/program');

module.exports = {
  /**
   * Get all programs
   * @param req
   * @param res
   * @returns void
   */
  getPrograms: (req, res) => {
    Program.find().exec((err, programs) => {
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
    const newProgram = new Program(req.body.program);

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
};
