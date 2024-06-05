const http = require('http');
const fs = require('fs');

const port = 1245;
const FILE_DB = process.argv.length <= 2 ? '' : process.argv[2];
const app = http.createServer();

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
    const report = [];
    const lines = data
      .toString('utf-8').trim().split('\n');

    const groupedStudents = groupCSVDataByField(lines);
    const studentsNum = Object.values(groupedStudents)
      .reduce((acc, group) => acc + group.length, 0);

    report.push(`Number of students: ${studentsNum}`);

    for (const [field, group] of Object.entries(groupedStudents)) {
      report.push(
        `Number of students in ${field}: ${group.length}. \
        List: ${group.map((student) => student.firstname).join(', ')}`,
      );
    }

    resolve(report.join('\n'));
  });
});

const ROUTE_HANDLERS = [
  {
    route: '/',
    handler(_, res) {
      const responseText = 'Hello Holberton School!';

      res.setHeader('Content-Type', 'text/plain');
      res.setHeader('Content-Length', responseText.length);
      res.statusCode = 200;
      res.write(Buffer.from(responseText));
    },
  },
  {
    route: '/students',
    handler(_, res) {
      const response = ['This is the list of our students'];

      countStudents(FILE_DB)
        .then((report) => {
          response.push(report);
          const responseText = response.join('\n');
          res.setHeader('Content-Type', 'text/plain');
          res.setHeader('Content-Length', responseText.length);
          res.statusCode = 200;
          res.write(Buffer.from(responseText));
        })
        .catch((err) => {
          response.push(err instanceof Error ? err.message : err.toString());
          const responseText = response.join('\n');
          res.setHeader('Content-Type', 'text/plain');
          res.setHeader('Content-Length', responseText.length);
          res.statusCode = 200;
          res.write(Buffer.from(responseText));
        });
    },
  },
];

app.on('request', (req, res) => {
  for (const routeHandler of ROUTE_HANDLERS) {
    if (routeHandler.route === req.url) {
      routeHandler.handler(req, res);
      break;
    }
  }
});

app.listen(port);

module.exports = app;
