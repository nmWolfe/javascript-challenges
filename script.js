// 1. Write a function that takes a number and returns true if it is a positive number and false if it is a negative number.

const handlePositiveNegative = num => {
    if (num > 0) {
        return true;
    } else {
        return false;
    }
}

console.log(handlePositiveNegative(-6))

// 2. Write a function that takes a number of days and converts it into an age.

const convertDaysToYears = days => {
    const years = days / 365;
    console.log(`${days} is ${Math.trunc(years)} years!`);
} 

convertDaysToYears(20000);

// 3. Write a function that takes three numbers and returns the largest of the three numbers.

const largestNumber = (a, b, c) => {
    return `The LARGEST number os ${a}, ${b} and ${c} is ... ${Math.max(a,b,c)} ... OBVIOUSLY`
}

console.log(largestNumber(10,200,30))

// 4. Write a function that takes an array of names and returns the last name from the array of names.

// 5. Write a function that takes an array of numbers and returns true if all of the numbers are positive. It should return false if there are one or more negative numbers in the array.

