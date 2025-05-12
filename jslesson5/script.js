// DOM

// Document Object Model


// console.log(document);

// console.log(document.getElementById("text"));

// console.log(document.getElementsByTagName("p")[0]);

// console.log(document.getElementsByClassName("text"));

// console.log(document.querySelector(".text"));
// console.log(document.querySelectorAll(".text")[0]);


// console.log(document.querySelector(".box"));
// console.log(document.querySelector(".box").children[2]);

// console.log(document.querySelector(".box").firstElementChild);
// console.log(document.querySelector(".box").lastElementChild.previousElementSibling);

// console.log(document.querySelector(".text").innerHTML);

// document.querySelector(".text").innerHTML = '<ul><li>1</li><li>2</li></ul>';

// const info = "info"

// document.querySelector(".text").innerHTML = `<ul>
//                                                 <li>1</li>
//                                                 <li>${info}</li>
//                                             </ul>`;



// console.log(document.querySelector(".text").outerHTML);

// document.querySelector(".text").outerHTML = "<p>New Content</p>"

// document.querySelector(".text").id = "idfromJs"

// console.log(document.querySelector(".text").className);


// document.querySelector(".text").setAttribute("id", "newid");

// document.querySelector(".text").setAttribute("id", "newid");

// document.querySelector(".text").classList.add("newClass");

// const text = document.querySelector(".text");

// text.style.color = "red";
// text.style.backgroundColor = "green";
// text.style.fontSize = "48px";
// text.classList.add("text-style");




// події

// function clicked(){
//     console.log("clicked from js");
// }


// const text = document.querySelector("#text");

// text.onclick = function(){
//     console.log("click 22");
// }

// function handleClick(){
//     console.log("clicked 88");
// }

// text.addEventListener("click", handleClick);

// const text = document.querySelector("#text");

// const button = document.querySelector(".button");


// button.addEventListener("click", () => {
//     text.style.color = 'red';
// })

// button.addEventListener('click', () => {
//     button.style.color = 'red';
// })

// button.addEventListener('click', (event) => {
//     // button.style.color = 'red';
//     // console.log(event);
//     // console.log(event.target);
//     event.target.style.color = 'red';

// })

// const button = document.querySelector(".button");

// const username = document.querySelector("#username");

// const greeting = document.querySelector(".greeting");


// button.addEventListener("click", () => {
//     // console.log(username.value);

//     greeting.innerHTML += `Hello ${username.value} <br>`;

//     username.value = '';
// })


// const registerForm = document.forms.registerForm;

// // console.log(registerForm);

// registerForm.addEventListener("submit", (event)=>{
//     // console.log("Form was submitted");
//     event.preventDefault();
//     // console.log("Form was submitted");
//     // console.log(event.target);
//     console.log(event.target.elements.username.value);
//     console.log(event.target.elements.email.value);
// })