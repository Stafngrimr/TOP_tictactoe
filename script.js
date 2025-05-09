/*
Store the gameboard as an arr inside of an obj
Players are also stored as obj
Object to control the flow of the game

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


function setTheme() {
    const root = document.documentElement;
    const newTheme = (root.className === 'green') ? 'blue' : 'green';
    root.className = newTheme;

    document.querySelector('.theme-name').textContent = newTheme;
}
document.querySelector('.theme-toggle').addEventListener('click', setTheme);
