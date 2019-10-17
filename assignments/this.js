/* The four principles of "this";
* in your own words explain the four principles for the "this" keyword below.
*
* 1. Window binding - when a function is found in the global scope, `this` will refer to the window Object
* 2. Implicit binding - whenever a function is invoked by the dot method, the object to the left of the dot refers this to that object
* 3. New binding - whenever a constructor function is used, `this` refers to the specific instance of the object that is created and returned by the constructor function
* 4. Explicit binding -whenever a function is invoked with call(), apply(), or bind()
*
* write out a code example of each explanation above
*/

// Principle 1
// code example for Window Binding

function person(name) {
    console.log(this);
    return name;
}

person("courtland");




// Principle 2
// code example for Implicit Binding

let me = {
    name: 'Courtland',
    sport: 'sand volleyball',
    hobby: function() {
        console.log(`My hobby is ${this.sport} and reading!`);
    }
}

me.hobby();




// Principle 3
// code example for New Binding

function Dog(pupName) {
    this.name = pupName;
}

let dog1 = new Dog('Max');

console.log(dog1.name);




// Principle 4
// code example for Explicit Binding

function lambdaSchool() {
    console.log(this.cohort);
}

let student1 = {
    name: 'Courtland',
    cohort: 'Full Stack Web'
}

lambdaSchool.call(student1);