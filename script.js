/*
Store the gameboard as an arr inside of an obj
Players are also stored as obj
Object to control the flow of the game

NO GLOBAL CODE I SAID!.. not yet
NO GLOBAL CODE.
*/

const gameBoard = (function () {
    const rowA = [1, 2, 3];
    const rowB = [1, 2, 3];
    const rowC = [1, 2, 3];
})();

function createGreeting(greeting) {
    const toGreet = greeting;
    return function (name) {
        return `${toGreet} ${name}!`;
    }
}

const theHello = createGreeting("Hello there");
const theHey = createGreeting("Hey, little");
const theRude = createGreeting("Fuck you");


console.log(theHello("Stephen"));
console.log(theHey("Penny"));
console.log(theRude("Zoe"));


// todo later: function that capitalises each word in the string

let arr = [1, 2, 3, 4, 5];
// write sum of tripled evens
// using map, filter & reduce

function sumOfTripledEvens(arr) {
    return arr
    .filter((num) => num % 2 === 0)
    .map((num) => num * 3)
    .reduce((total, current) => total + current, );
}
console.log(sumOfTripledEvens(arr));

// a <p> with red text
// a h3 with blue text
// a div with black border, pink background

const paragraph = document.createElement("p");
const head3 = document.createElement("h3");
const youDiv = document.createElement("div");
const head1 = document.createElement("h1");
const para1 = document.createElement("p");

const body = document.querySelector("body")

body.appendChild(paragraph);
paragraph.style.color = "red";
paragraph.textContent = "You mother fucker.";

body.appendChild(head3);
head3.style.color = "blue";
head3.textContent = "I'm a header and I'm in blue.";

youDiv.appendChild(head1);
youDiv.appendChild(para1);
body.appendChild(youDiv);
youDiv.style.border = "3px dotted white";
youDiv.style.backgroundColor = "pink";
head1.textContent = "I'm a header inside this div!";
para1.textContent = "I'm also in this div!";

function alertFunction1() {
    alert("Hello Bitches!");
}

function alertFunction2() {
    alert("HELLO IT'S JOHNNY!");
}

function alertFunctionINLINE() {
    alert("Hello World");
}

const btn = document.querySelector("#btn");
btn.onclick = alertFunction();
// the above is good, but a DOM element can only have one onclick property

const btn2 = document.querySelector("#btn2");
btn2.addEventListener("click", alertFunction());

// best example is above example because it's more flexible.
// Also use named functions in your code. It's just good practice.
