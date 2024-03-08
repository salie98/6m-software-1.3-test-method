/*
    Task
    - In the function, iterate through the array `studentList`.
    - Print each student's name inside the loop using console.log().
*/

const studentList = ["Johnson", "Christina", "Michael", "Lina", "Larry", "Michelle", "Bob", "Wilson"]

function printStudentNames(){
    for(let scntr=0; scntr<studentList.length; scntr++ ){
        console.log(studentList[scntr]);
    }
}

printStudentNames();

// Ignore the code below this line
module.exports = {
    studentList,
    printStudentNames
}