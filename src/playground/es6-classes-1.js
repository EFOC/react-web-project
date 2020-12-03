class Person {
    constructor(name = 'Unknown', age = 0) {
        this.name = name;
        this.age = age;
    }
    getGretting() {
        // return 'Hi! ' + this.name
        return `Hi, I am ${this.name}`;
    }
    getDescription() {
        return `${this.name} is ${this.age} old.`;
    }
}

class Student extends Person {
    constructor(name, age, major) {
        super(name, age);
        this.major = major;
    }
    hasMajor() {
        return !!this.major;
    }
    getDescription() {
        let description = super.getDescription();
        if (this.hasMajor()) {
            description += ` Their major is ${this.major}.`;
        }
        return description;
    }
}

class Traveler extends Person {
    constructor(name, age, location) {
        super(name, age);
        this.location = location;
    }
    hasLocation() {
        return !!this.location;
    }
    getDescription() {
        let description = super.getDescription();
        if (this.hasLocation()) {
            description += ` I am visiting ${this.location}`;
        }
        return description;
    }
}

const me = new Student('Andrew Mead', 26, 'Computer Science');
console.log(me.getDescription());
const other = new Student();
console.log(other.getDescription());
const trav = new Traveler('Trav', 20, 'Toronto');
console.log(trav.getDescription());