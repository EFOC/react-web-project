// arguments object - no longer bound with arrow functions

const add = (a, b) => {
    // console.log(arguments);
    return a + b;
};
console.log('add', add(55, 1));

// this keyword - no longer bound
const user = {
    name: 'Andrew',
    cities: ['Toronto', 'New York', 'Dublin'],
    printPlacesLived() {
        return this.cities.map((city) => this.name + ' has lived in: ' + city);
    }
};

console.log(user.printPlacesLived());

// Challenge

const multiplier = {
    // numbers - array of numbers
    // multiplyBy = single number
    multiply(numbers, multiplyBy) {
        return numbers.map((number) => number * multiplyBy);
    }
};

console.log(multiplier.multiply([1, 6], 2));