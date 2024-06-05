function groupCSVDataByField(lines) {
  const students = {};
  const fieldNames = lines[0].split(',');
  const propNames = fieldNames.slice(0, fieldNames.length - 1);

  for (const line of lines.slice(1)) {
    const record = line.split(',');
    const propValues = record.slice(0, record.length - 1);
    const field = record[record.length - 1];
    if (!Object.keys(students).includes(field)) {
      students[field] = [];
    }
    const entries = propNames
      .map((propName, idx) => [propName, propValues[idx]]);
    students[field].push(Object.fromEntries(entries));
  }

  return students;
}

const fs = require('fs');

const countStudents = (path) => new Promise((resolve, reject) => {
  fs.readFile(path, 'utf-8', (err, data) => {
    if (err) {
      reject(new Error('Cannot load the database'));
      return;
    }
    if (!data) {
      reject(Error('No data'));
      return;
    }
    const lines = data
      .toString('utf-8').trim().split('\n');

    const groupedStudents = groupCSVDataByField(lines);
    const studentsNum = Object.values(groupedStudents)
      .reduce((acc, group) => acc + group.length, 0);

    console.log(`Number of students: ${studentsNum}`);

    for (const [field, group] of Object.entries(groupedStudents)) {
      const studentNames = group.map((student) => student.firstname).join(', ');
      console.log(`Number of students in ${field}: ${group.length}. List: ${studentNames}`);
    }

    resolve();
  });
});

module.exports = countStudents;
