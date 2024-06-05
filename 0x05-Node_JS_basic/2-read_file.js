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

const countStudents = (path) => {
  if (!fs.existsSync(path) || !fs.statSync(path).isFile()) {
    throw new Error('Cannot load the database');
  }

  const Lines = fs
    .readFileSync(path, 'utf-8')
    .toString('utf-8')
    .trim()
    .split('\n');

  const groupedStudent = groupCSVDataByField(Lines);

  const totalStudents = Object
    .values(groupedStudent)
    .reduce((pre, cur) => (pre || []).length + cur.length);
  console.log(`Number of students: ${totalStudents}`);
  for (const [field, group] of Object.entries(groupedStudent)) {
    const studentNames = group.map((student) => student.firstname).join(', ');
    console.log(`Number of students in ${field}: ${group.length}. List: ${studentNames}`);
  }
};

module.exports = countStudents;
