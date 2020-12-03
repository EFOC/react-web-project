var nameVar = 'Eduardo';
var nameVar = 'John';
console.log('nameVar', nameVar);

let nameLet = 'Jen';
nameLet = 'Julie';
console.log('nameLet', nameLet);

const nameConst = 'Frank';
console.log('nameConst', nameConst);

function getPetName() {
    var petName = 'Hal';
    return petName;
}

// Block scope

var fullName = 'Andrew Mead';
if (fullName) {
    const firstName = fullName.split(' ')[0];
    console.log('firstName', firstName);
}

console.log('firstName', firstName);