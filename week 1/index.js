console.log("This is my first program")

let num1 = 1
let num2 = 2

const sum = num1 + num2

console.log(sum)
console.log("The sum of", num1, "and", num2, "is", sum)

const num3 = 10
if (num3 > num1) {
    console.log("num3 is greater than num1")
}
else if (num3 < 0) {
    console.log("The numner is negative")

}
else {
    console.log("num3 is less than num1")
}
// Calculator Program for Basic Arithmetic Operations

function calculator(...numbers) {
    // Check if there are at least two numbers
    if (numbers.length < 2) {
        return "Please provide at least two numbers.";
    }

    // Addition
    const add = () => numbers.reduce((sum, num) => sum + num, 0);

    // Subtraction
    const subtract = () => numbers.reduce((diff, num, index) =>
        index === 0 ? num : diff - num);

    // Multiplication
    const multiply = () => numbers.reduce((product, num) => product * num, 1);

    // Division
    const divide = () => {
        if (numbers.includes(0)) {
            return "Cannot divide by zero.";
        }
        return numbers.reduce((quotient, num, index) =>
            index === 0 ? num : quotient / num);
    };

    // Return results of all operations
    return {
        addition: add(),
        subtraction: subtract(),
        multiplication: multiply(),
        division: divide()
    };
}

// Example usage of the calculator
console.log(calculator(10, 5, 2));
console.log(calculator(20, 4));
console.log(calculator(100, 5, 2, 10));