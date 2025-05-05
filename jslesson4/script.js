// Обєктно орієнтоване програмування

// Наслідування
// Інкапсуляція
// Поліморфізм

// 

// 

// const user = {
//     // ключ: значення
//     // key: value
// }


// const user = {
//     name: "Volodymyr",
//     age: 99,
//     city: "Lviv",
//     friends: ["fr1", "fr2"],
//     // "mother name": "Ivanka"
//     son: {
//         name: "Ivan Jnr",
//         age: 2
//     },
//     sayHello: function(){
//         console.log("Hello from " + this.name);
//     }
// }

// [
//     {
//         id: 1,
//         name: "1"
//     },
//     {
//         id: 2,
//         name: "2"
//     }
// ]


// console.log(user);
// console.log(user.name);
// console.log(user.friends);

// user.name = "Ivan";
// console.log(user);

// user.address = "Rynok Sqr";
// console.log(user);
// console.log(user["name"]);


// console.log(user.son.name);

// user.sayHello();


// class User {
//     constructor(name, age, city){
//         this.name = name;
//         this.age = age;
//         this.city = city;
//     }

//     sayHello(){
//         console.log("Hello my name is " + this.name);
//     }


// }

// const user1 = new User("volodymyr", 40, "lviv");
// const user2 = new User("user", 30, "lviv");
// new User()

// console.log(user1);
// console.log(user2);

// user1.sayHello();
// user2.sayHello();


class Person {
    constructor(name){
        this.name = name;
    }

    sayHello(){
        console.log("Hello my name is " + this.name);
    }


}


class Student extends Person {
    #salary;
    constructor(name, year, salary){
        super(name);
        this.year = year;
        this.#salary = salary;
    }

    sayHello(){
        // console.log("My name is " + this.name + "year:" + this. year);
        // console.log("Hello my name is " + this.name);
        super.sayHello();
        console.log("Year: " + this.year);
    }

    get salary(){
        return this.#salary;
    }

    set salary(newSalary){
        this.#salary = newSalary;
    }
}

const st1 = new Student("student1", 2007, 200);

st1.sayHello();

console.log(st1);
console.log(st1.salary);

st1.salary = 300;

console.log(st1);
