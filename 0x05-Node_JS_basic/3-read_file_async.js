const fs = require('fs');

const countStudents = (path) => new Promise((resolve, reject) => {
  fs.readFile(path, 'utf8', (err, data) => {
    if (err) {
      reject(Error('Cannot load the database'));
      return;
    }
    const lines = data.split('\n').slice(1, -1);
    console.log(`Number of students: ${lines.length}`);
    const fields = {};
    lines.forEach((line) => {
      const student = line.split(',');
      if (!fields[student[3]]) fields[student[3]] = [];
      fields[student[3]].push(student[0]);
    });
    for (const field in fields) {
      if (field) {
        const list = fields[field];
        console.log(`Number of students in ${field}: ${list.length}.\
        List: ${list.join(', ')}`);
      }
    }
    resolve();
  });
});

module.exports = countStudents;
