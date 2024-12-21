// A capitalize function that takes a string and returns it with the first character capitalized.
// A reverseString function that takes a string and returns it reversed.
// A calculator object that contains functions for the basic operations: add, subtract, divide, and multiply.
//      each of these functions should take two numbers and return the correct calculation.

const capitalize = (str) => {
    return String(str).charAt(0).toUpperCase() + String(str).slice(1);
};

const reverseString = (str) => {
    return String(str).split("").reverse().join("");
};

const calculator = (a, b) => {
    const sum = () => {
        return a + b;
    };

    const multiply = () => {
        return a * b;
    };

    return {
        sum,
        multiply,
    };
};

export { capitalize, reverseString, calculator };
