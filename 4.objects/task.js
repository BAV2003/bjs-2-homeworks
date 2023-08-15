function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
  this.marks = [];
}

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
}

Student.prototype.addMarks = function (...marks) {
  if ('marks' in this === true) {
    this.marks.push(...marks);
  }
}

Student.prototype.getAverage = function () {
  if ('marks' in this === false || this.marks.length === 0) {
  return 0;
  }
  const gradeAverage = this.marks.reduce((acc, mark, index, arr) => {
  acc += mark;
  if (index === arr.length - 1) {
    return acc / arr.length;
  }
  return acc;
  }, 0);
  return gradeAverage;
}

Student.prototype.exclude = function (reason) {
  delete this.subject;
  delete this.marks;
  this.excluded = reason;
}
