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

let mama = (3 + 2) - 76 * (1 + 1);
console.log(mama);
