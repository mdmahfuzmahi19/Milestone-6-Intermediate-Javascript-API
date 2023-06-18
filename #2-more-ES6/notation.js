const student = {
    name: 'korim uddin',
    age: 15,
    calss: 9,
    marks: {
        math:79,
        physice: 65,
        chemistry: 82, 
    }
}

const marks = student.marks;
const math = student.marks.math;

const chemistry = student['marks']['chemistry']
const subjects = 'math';
const subjectsMarks = student.marks[subjects]
// const mark2 = student.marks.subjects
console.log(subjectsMarks); 