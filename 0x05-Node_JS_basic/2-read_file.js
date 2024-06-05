const fs = require('fs');
const csv = require('csv-parser');

function countStudents(path) {
  if (!fs.existsSync(path)) {
    throw new Error('Cannot load the database');
  }

  const data = [];
  fs.createReadStream(path)
    .pipe(csv())
    .on('data', (row) => {
      data.push(row);
    })
    .on('end', () => {
      console.log(`Number of students: ${data.length}`);
      const fields = {};
      for (let i = 0; i < data.length; i += 1) {
        if (Object.prototype.hasOwnProperty.call(fields,
          data[i].field)) {
          fields[data[i].field].push(data[i].firstname);
        } else {
          fields[data[i].field] = [data[i].firstname];
        }
      }
      for (const field in fields) {
        if (Object.prototype.hasOwnProperty.call(fields, field)) {
          console.log(`Number of students in ${field}: \
          ${fields[field].length}. List: ${fields[field].join(', ')}`);
        }
      }
    });
}

module.exports = countStudents;
