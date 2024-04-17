export default function updateStudentGradeByCity(students, city, newGrades) {
  if (!Array.isArray(students) || typeof city !== 'string' || !Array.isArray(newGrades)) {
    return [];
  }
  return students.filter((student) => student.city === city).map((student) => {
    const grade = newGrades.filter((newGrade) => newGrade.studentId === student.id);
    if (grade.length === 0) {
      return {
        ...student,
        grade: 'N/A',
      };
    }
    return {
      ...student,
      grade: grade[0].grade,
    };
  });
}
