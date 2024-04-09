export default function createIteratorObject (report) {
  const departments = Object.keys(report.allEmployees);
  return (function * () {
    for (let i = 0; i < departments.length; i++) {
      const employees = report.allEmployees[departments[i]];
      for (let j = 0; j < employees.length; j++) {
        yield employees[j];
      }
    }
  }());
}
