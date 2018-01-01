const Program = require('./models/program');

module.exports = {
  load: () => {
    Program.count((err, count) => {
      if (err) throw err;

      // Guard against duplicating data
      if (count > 0) return;

      const Program1 = new Program({ id: 'CSC' });

      Program.create([Program1], (createError) => {
        if (createError) throw createError;
        console.log('Loaded program data!'); // eslint-disable-line
      });
    });
  },
};
