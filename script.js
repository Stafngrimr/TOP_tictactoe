/*
Store the gameboard as an arr inside of an obj
Players are also stored as obj
Object to control the flow of the game

NO GLOBAL CODE I SAID!.. not yet
NO GLOBAL CODE.
*/

const gameBoard = (function() {
    const 0L = 0;
    const 0M = 0;
    const 0R = 0;
    const 1L = 0;
    const 1M = 0;
    const 1R = 0;
    const 2L = 0;
    const 2M = 0;
    const 2R = 0;
})();


function createPlayer(name, marker) {
    return { name, marker }
}

const game = (function() {
    const play1 = createPlayer("Steve", "x");
    const play2 = createPlayer("Tom", "o");
    
    console.log("Players " + play1.name + " and " + play2.name + " have entered the arena!");
})();
