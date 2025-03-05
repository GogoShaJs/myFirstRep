const a = 2
const b = "Привет задание 1"

console.log("Привет мир")
let mimi = 15

class Person {
    constructor(name, age, happiness) {
        this.name = name;
        this.age = age;
        this.happiness = happiness;
    }
}

let alex = new Person("Alex", 20, true);
let bob = new Person("Bob", 30, false);
console.log(alex.name);
console.log(bob.name);