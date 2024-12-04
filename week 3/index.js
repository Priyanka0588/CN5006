// Definition of the function EmployeeInfo
function EmployeeInfo(name, Salary) {
    console.log("Welcome " + name + ". Your monthly Salary is " + Salary);
}

// Console log message
console.log("This is my first program");

// Declare variables
var EmpName = "John";
var EmpSalary = 50000;

// Calling the function EmployeeInfo
EmployeeInfo(EmpName, EmpSalary);

// Arrow function definition
const EmpSkills = (skills) => {
    console.log("Expert in " + skills);
};

// Calling the arrow function
EmpSkills("Java");



const studentInfo = require('./StudentInfo');
const Person = require('./Person');

// Call and display student info from StudentInfo.js
console.log("Student Name: " + studentInfo.getName());
console.log("Campus Location: " + studentInfo.Location());
console.log("Date of Birth: " + studentInfo.dob);
console.log("Grade: " + studentInfo.Studentgrade(55));

// Create a new person using the Person class
const person1 = new Person("Jim", 20, "jim@example.com");
console.log("Using Person Module: " + person1.getPersonInfo());


const os = require('os');
const util = require('util');

console.log("Temporary Directory: " + os.tmpdir());
console.log("Hostname: " + os.hostname());
console.log("Operating System: " + os.platform() + ", Release: " + os.release());
console.log("Uptime: " + (os.uptime() / 3600) + " hours");
console.log("User Info: " + util.inspect(os.userInfo()));
console.log("Total Memory: " + os.totalmem() / 1e9 + " GB");
console.log("Free Memory: " + os.freemem() / 1e9 + " GB");
console.log("CPU Info: " + util.inspect(os.cpus()));
console.log("Network Interfaces: " + util.inspect(os.networkInterfaces()));
console.log("Program ended");
