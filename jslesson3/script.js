// цикли функції масиви помилки

// while for 
// for of
// for in

// const array = [1,2,3,4,5,6];


// for(let i = 0; i < array.length; i++){
//     console.log(array[i]);
// }

// for (let element of array){
//     console.log(element);
// }

// for (let index in array){
//     console.log(array[index]);
// }

// методи перебору масивів

// const array = [1,2,3,4,5,6];

// array.push(8,9);
// array.pop(2)

// console.log(array);

// forEach map reduce filter find

// array.forEach(function(element){
//     console.log(element);
//     // console.log(index);
//     // console.log(array);

// })


// array.map(function(element){
//     console.log(element);
// })

// const newArray = array.map(function(element){
//     // console.log(element);
//     return element + 10;
// })

// console.log(newArray);

// let result = array.reduce(function(sum, element){
//     return sum + element;
// },0);


// console.log(result);

// let filteredArray = array.filter(function(element){
//     // console.log(element);
//     return element > 3;

// })

// console.log(filteredArray);

// let result = array.find(function(element){
//     return element === 3;
// })

// console.log(result);

// функції

// function sum(a,b){
//     console.log(a + b);
// }

// console.log(sum(10, 20))
// let res = sum(10, 20);
// sum(10, 20);

// array.push()

// array.map()

// function sum(a,b){
//     // console.log(a + b);
//     // console.log(arguments);
//     // console.log(numbers);
//     return a + b;
// }

// sum(2,4,5,6)

// array.pop()

// default param

// function mult(a , b = 1, c = 1){
//     console.log(a * b * c);
// }


// mult(10,10,100);

// mult(a)


// function declaration
// function expression

// dec();


// function dec(){
//     console.log("declaration");
// }

// express();


// const express = function(){
//     console.log("expression");
// }


// стрілочні функції

// const func = function(){
//     return a + b;
// }

// const func = () =>{
//     return a + b;
// }

// const func = (a,b) => a + b;
// const func = a => a.toUpperCase();

// const func = a => {
//     if(a > 0){
//         return a;
//     }
// };

// const array = [1,2,3,4,5,6];

// array.map(function(element){
//     return element + 10;
// })

// array.map(element => element + 10)
//      .filter(element => element > 12)
//      .reduce((sum, element) => sum + element, 0);


// 

// 
// let p = 1 + 2;



// let c = 10 -2 ;

// let a = 10;
// let b = 20;

// let c = a + b;

// let d = c + a;



// try{
//     console.log("try begin");
//     // func();
//     console.log("try end");
// }catch(e){
//     console.log("catch begin");
// }

// try{
//     console.log("try begin");
//     func();
//     console.log("try end");
// }catch(error){
//     // console.log("catch begin");
//     // console.log(error);
//     // console.log(error.name);
//     console.log(error.message);


// }
// function checkAge(){
//     let age = "srdgf";
//     if (age < 18){
//         throw new Error("Wrong Age!")
//     } 
//     if(typeof age !== "number"){
//         throw new TypeError("Wrong age dataType");
//     }
// }

// try{
//     // console.log("try begin");
//     // func();
//     // console.log("try end");
//    checkAge();
    
// }catch(error){
//     // console.log("catch begin");
//     // console.log(error);
//     console.log(error.name);
//     console.log(error.message);


// }