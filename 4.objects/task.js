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
  this.marks !== undefined ? this.marks.push(...marks) : console.log("Студент отчислен");
}

Student.prototype.getAverage = function () {
  let result = 0;
  if (this.marks !== undefined) {
    this.marks.reduce((acc, element, index, arr) => {
        acc += element;
        if (index === arr.length - 1) {
            result = acc / arr.length;
        }
        return acc;
      }, 0);
  } 
  return result;
}

Student.prototype.exclude = function (reason) {
  this.exclude = reason;
  delete this.subject;
  delete this.marks;
}
