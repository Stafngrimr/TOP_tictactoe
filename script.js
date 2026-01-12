/*
NO GLOBAL CODE.

TODO:
- game loop
- how to use players? Can't use play1.marker in gameBoard it seems..

*/

const gameBoard = (function() {
    let arr = [0, 0, 0, 0, 0, 0, 0, 0 ,0]

    function showBoard() {
        console.log(arr[0], arr[1], arr[2]);
        console.log(arr[3], arr[4], arr[5]);
        console.log(arr[6], arr[7], arr[8]);
        console.log("- - - - -");
    }

    function play1_mark(arrPos) {
        if (arr[arrPos] === 0) {
            arr[arrPos] = "x";
        } else {
            return 1;
        }
    }

    function play2_mark(arrPos) {
        if (arr[arrPos] === 0) {
            arr[arrPos] = "o";
        } else {
            return 1;
        }
    }

    return { showBoard, play1_mark, play2_mark };
})();


function createPlayer(name, marker) {
    return { name, marker }
}

function checkBoard() {
    if (gameBoard.arr[0] === "x" && gameBoard.arr[1] === "x" && gameBoard.arr[2] === "x") {
        return "one";
    } else if (gameBoard.arr[0] === "o" && gameBoard.arr[1] === "o" && gameBoard.arr[2] === "o"
    || gameBoard.arr[3] === "o" && gameBoard.arr[4] === "o" && gameBoard.arr[5] === "o"
    || gameBoard.arr[6] === "o" && gameBoard.arr[7] === "o" && gameBoard.arr[8] === "o") {
        return "two";
    } else {
        return 0;
    }
}

const game = (function() {
    const play1 = createPlayer("Steve", "x");
    const play2 = createPlayer("Tom", "o");
    let winner = 0;
    
    console.log("Players " + play1.name + " and " + play2.name + " have entered the arena!");
    gameBoard.showBoard();



})();

