const router = require('express').Router();
const ProgramController = require('../../controllers/program');

// Get all programs
router.get('/api/programs', ProgramController.getPrograms);

// Add a program
router.post('/api/programs', ProgramController.addProgram);

// Update a program
router.put('/api/programs/:id', ProgramController.updateProgram);

// Delete a program
router.delete('/api/programs/:id', ProgramController.deleteProgram);

// Get a program
router.get('/api/programs/:id', ProgramController.getProgram);

// Add course requirement to program
router.post('/api/programs/:pid/courses/:cid', ProgramController.addCourse);

module.exports = router;
