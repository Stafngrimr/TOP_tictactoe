/*

NO GLOBAL CODE. 

*/

const gameBoard = (function() {
    let arr = [0, 0, 0, 0, 0, 0, 0, 0 ,0]

    function show() {
        console.log(arr[0], arr[1], arr[2]);
        console.log(arr[3], arr[4], arr[5]);
        console.log(arr[6], arr[7], arr[8]);
        console.log("- - - - -");
    }

    function mark(player, arrPos) {
        if (arr[arrPos] === 0) {
            arr[arrPos] = player.marker;
        } else {
            return 1;
        }
    }

    function check(player) {
        if (arr[0] === player.marker && arr[1] === player.marker && arr[2] === player.marker
        || arr[3] === player.marker && arr[4] === player.marker && arr[5] === player.marker
        || arr[6] === player.marker && arr[7] === player.marker && arr[8] === player.marker
        || arr[0] === player.marker && arr[3] === player.marker && arr[6] === player.marker
        || arr[1] === player.marker && arr[4] === player.marker && arr[7] === player.marker
        || arr[2] === player.marker && arr[5] === player.marker && arr[8] === player.marker
        || arr[0] === player.marker && arr[4] === player.marker && arr[8] === player.marker
        || arr[2] === player.marker && arr[4] === player.marker && arr[6] === player.marker) {
            return player;
        } else {
            return false;
        }
    }

    return { show, mark, check };
})();


function createPlayer(name, marker) {
    return { name, marker }
}


const game = (function() {
    const play1 = createPlayer("Steve", "x");
    const play2 = createPlayer("Tom", "o");
    let winner = false;
    
    console.log("Players " + play1.name + "(" + play1.marker + ") and " + play2.name + "(" + play2.marker + ") have entered the arena!");
    gameBoard.show();

    while (winner === false) {
        for (let i = 0; i < 9; i++) {
            
        }
        winner = gameBoard.check(play1);
    }
    
    if (winner != false) {
        console.log(winner.name + " wins!");
    } else {
        console.log("No winner yet");
    }

})();

