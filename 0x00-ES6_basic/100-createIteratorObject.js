export default function createIteratorObject(report) {
  const departments = Object.keys(report.allEmployees);
  return (function*  p() {
    for (const department of departments) {
      const employees = report.allEmployees[department];
      for (const emp of employees) {
        yield emp;
      }
    }
  }());
}
