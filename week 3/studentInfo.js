// Variable and function declarations
const dateofBirth = "12/12/1980";

const getStudentName = () => {
    return "John Doe"; // Replace with any name
};

const getCampusName = () => {
    return "UEL Campus";
};

// Exporting functions and variables
exports.getName = getStudentName;
exports.Location = getCampusName;
exports.dob = dateofBirth;

exports.Studentgrade = (marks) => {
    if (marks > 50 && marks < 70) return "B grade";
    else return "A grade";
};
