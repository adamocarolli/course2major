module.exports = {
  /**
   * Get all programs
   * @param req
   * @param res
   * @returns void
   */
  getPrograms: (req, res) => {
    res.status(200);
    res.send('GET /api/programs');
  },

  /**
   * Add a program
   * @param req
   * @param res
   * @returns void
   */
  addProgram: (req, res) => {
    res.status(201);
    res.send('POST /api/programs');
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
    res.status(204);
    res.send(`DELETE /api/programs/${req.params.id}`);
  },
};
