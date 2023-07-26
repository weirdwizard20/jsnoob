

let fruits = [];
fruits.push("apple");
fruits.push("banana");
fruits.push("orange");
fruits.splice(0, 1);
fruits.push("grape");
fruits.splice(1, 1, "pear");
console.log(fruits);
let person = {};
person.name = "John";
person.age = 30;
person.city = "New York";
delete person.age;
person.job = "engineer";
person.city = "San Francisco";
console.log(person);
let cars = [];
cars.push({ 'make': "Toyota" }, { "model": "Cambry" }, { "year": 2018 });
cars.splice(0, 1);
cars.push({ 'make': "Honda", "model": "Civic", "year": 2020 });
cars[2].model = "accord";
console.log(cars);