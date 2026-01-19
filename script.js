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
        if (arr[arrPos] === 0 && arrPos != NaN && arrPos.length === 1) {
            arr[arrPos] = player.marker;
            return 0;
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
    let display = name + "(" + marker + ")";

    return { name, marker, display }
}


const game = (function() {
    const play1 = createPlayer("Steve", "x");
    const play2 = createPlayer("Tom", "o");
    let turn;
    let validity;
    let winner = false;
    
    // get the crowd going
    console.log("Players " + play1.display + " and " + play2.display + " have entered the arena!");
    gameBoard.show();

    // determining who goes first
    let roll = Math.floor(Math.random() * 2);
    if (roll === 0) {
        console.log(play1.display + " will start!");
        turn = play1;
    } else {
        console.log(play2.display + " will start!");
        turn = play2;
    }

    // actual game loop
    for (let i = 0; i < 9; i++) {
        do {
            let move = prompt(turn.name + ", your move");
            validity = gameBoard.mark(turn, move);
        } while (validity === 1);

        gameBoard.show();

        winner = gameBoard.check(turn);
        if (winner === false) {
            if (turn === play1) {
                turn = play2;
            } else {
                turn = play1;
            }
        } else {
            break;
        }
    }
    
    if (winner === false) {
        console.log("I'm afraid it's a draw folks!");
    } else {
        console.log(turn.name + " is the winner!");
    }
})();
