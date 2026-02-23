function Person(name, age) {
    this.name = name;
    this.age = age;
}

// greet method
Person.prototype.greet = function() {
    console.log(`Hello, my name is ${this.name}, I am ${this.age} years old.`);
};

function Employee(name, age, jobTitle) {
    // inherit properties
    Person.call(this, name, age);
    this.jobTitle = jobTitle;
}

// inherit prototype methods
Employee.prototype = Object.create(Person.prototype);

// fix constructor reference
Employee.prototype.constructor = Employee;

// jobGreet method
Employee.prototype.jobGreet = function() {
    console.log(`Hello, my name is ${this.name}, I am ${this.age} years old, and my job title is ${this.jobTitle}.`);
};

// Do not change code below
window.Person = Person;
window.Employee = Employee;
