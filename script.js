/*
Store the gameboard as an arr inside of an obj
Players are also stored as obj
Object to control the flow of the game

NO GLOBAL CODE I SAID!.. not yet
NO GLOBAL CODE.
*/

function Player(name, marker) {
    if (!new.target) {
        throw Error("You didn't use 'new' operator to call this function dumb-dumb!");
    }

    this.name = name;
    this.marker = marker;
    this.insultMe = function() {
        console.log("Fuck you, " + name);
    }
    this.sayName = function() {
        console.log(this.name);
    }
    this.sayMarker = function() {
        console.log(this.marker);
    }
}


const player = new Player('Zoe', 'P');
const player2 = new Player('Tim', 'W');
const playerOne = new Player('steve', 'X');
const playerTwo = new Player('tom', 'O');

console.log(player.name);
console.log(playerTwo.name);

player.insultMe();
playerTwo.insultMe();

playerOne.sayName();
playerTwo.sayMarker();


function Book(name, author, pages, read) {
    if (!new.target) {
        throw Error("missing 'new'");
    }

    this.name = name;
    this.author = author;
    this.pages = pages;
    this.read = false;
    this.info = function() {
        let text;
        if (this.read == false) {
            text = "not read yet.";
        } else {
            text = "have read.";
        }
        return (this.name + " by " + this.author + ", " + this.pages + " pages, " + text);
    }
}

const theHobbit = new Book("The Hobbit", "JRR Tolkien", "295", false);

console.log(theHobbit.info());
