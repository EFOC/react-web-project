const square = function (x) {
    return x * x;
};

// const squareArrow = (x) => {
//     return x * x;
// };

const squareArrow = (x) => x * x;

console.log('squareArrow', squareArrow(8));

// Use arrow functions
// getFirstName

const getFirstName = (fullName) => fullName.split(' ')[0];
console.log('getFirstName', getFirstName('Andrew Mead'));