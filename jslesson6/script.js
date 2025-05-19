// localStorage.setItem("name", "Volodymyr");

// console.log(localStorage.getItem("name"));

// localStorage.removeItem("name");

// localStorage.clear();

// const studentsArray = ["Ivan", "Petro", "Vasyl", {name: "volodymyr"}];


// localStorage.setItem("students", JSON.stringify(studentsArray));

// console.log(JSON.parse(localStorage.getItem("students")));

// import {name, sayHello} from "./file.js";

// console.log(name);

// sayHello();

// const obj = {
//     // name: "name1",
//     age: 23,
//     city: "lviv"
// }

// const name = obj.name;
// const age = obj.age;


// const {name = "username", age} = obj;

// console.log(name);

// function sum(x,y = 0){
//     console.log(x + y);
// }

// sum(1, 10);


// const obj = {
//     name: "name1",
//     age: 23,
//     city: "lviv"
// }

// function fun1({name, age}){
//     console.log(name + " : " + age);
// }

// fun1(obj);

// регулярні вирази


// let regExp = /hello/;

// let regExp = /hello/g // - flags;

// let regExp = /hello/gi // - flags;

// let regExp = /hello guys/gi // - flags;





// let string = "helloguys guys Hello";

// let string = "hello guys guys Hello";


// console.log(regExp.test(string))

// console.log(string.match(regExp));



// let regExp = /[hello guys]/gi 

// let regExp = /[a-d]/gi 

// let regExp = /[^a-z]/gi

// let regExp = /[A-Da-d0-3]/g

// let regExp = /\d{3,}/g

// let regExp = /\d+/g

let regExp = /10*/g








let string = "100 10 1";


console.log(string.match(regExp));

