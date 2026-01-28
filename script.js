/*

NO GLOBAL CODE. 

*/

const domManip = (function() {
    // Player 1 Colours
    const p1Red = document.querySelector("#play1_red");
    const p1Pink = document.querySelector("#play1_pink");
    const p1Purple = document.querySelector("#play1_purple");
    const p1Teal = document.querySelector("#play1_teal");
    const p1Green = document.querySelector("#play1_green");
    const p1Blue = document.querySelector("#play1_blue");
    const p1Yellow = document.querySelector("#play1_yellow");
    const p1Orange = document.querySelector("#play1_orange");
    
    // player 2 colours
    const p2Red = document.querySelector("#play2_red");
    const p2Pink = document.querySelector("#play2_pink");
    const p2Purple = document.querySelector("#play2_purple");
    const p2Teal = document.querySelector("#play2_teal");
    const p2Green = document.querySelector("#play2_green");
    const p2Blue = document.querySelector("#play2_blue");
    const p2Yellow = document.querySelector("#play2_yellow");
    const p2Orange = document.querySelector("#play2_orange");

    // select all the markers for p1 & p2 for "selection" purposes
    const markers = document.querySelectorAll(".markers");

    // status selectors
    const gameStatus = document.querySelector("#status");
    const oStatus = document.querySelector("#o_status");
    const xStatus = document.querySelector("#x_status");

    const reset = document.querySelector("button");

    console.log(markers);

    // you havn't worked this out yet.
    // colour selection might have to occur via status, so that when NOT selected they go back to their regular colour
    // Not sure the best way to do that.. add an extra id?
    markers.forEach((color) => {
        color.addEventListener("click", () => {
            console.log(color.dataset.color);
            color.src= "img/selected.png";
        }
    )});


    p1Red.addEventListener("click", () => {
        oStatus.textContent = "You've selected red";
    });

    p1Pink.addEventListener("click", () => {
        oStatus.textContent = "You've selected pink";
    });
    
    p1Purple.addEventListener("click", () => {
        oStatus.textContent = "You've selected purple";
    });

    p1Teal.addEventListener("click", () => {
        oStatus.textContent = "You've selected teal";
    });

    p1Green.addEventListener("click", () => {
        oStatus.textContent = "You've selected green";
    });

    p1Blue.addEventListener("click", () => {
        oStatus.textContent = "You've selected blue";
    });

    p1Yellow.addEventListener("click", () => {
        oStatus.textContent = "You've selected yellow";
    });
    
    p1Orange.addEventListener("click", () => {
        oStatus.textContent = "You've selected orange";
    });

    p2Red.addEventListener("click", () => {
        xStatus.textContent = "You've selected red";
    });

    p2Pink.addEventListener("click", () => {
        xStatus.textContent = "You've selected pink";
    });
    
    p2Purple.addEventListener("click", () => {
        xStatus.textContent = "You've selected purple";
    });

    p2Teal.addEventListener("click", () => {
        xStatus.textContent = "You've selected teal";
    });

    p2Green.addEventListener("click", () => {
        xStatus.textContent = "You've selected green";
    });

    p2Blue.addEventListener("click", () => {
        xStatus.textContent = "You've selected blue";
    });

    p2Yellow.addEventListener("click", () => {
        xStatus.textContent = "You've selected yellow";
    });
    
    p2Orange.addEventListener("click", () => {
        xStatus.textContent = "You've selected orange";
    });

})();

const gameBoard = (function() {
    let arr = [0, 0, 0, 0, 0, 0, 0, 0 ,0]

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

    return { mark, check };
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
    
    // determining who goes first
    let roll = Math.floor(Math.random() * 2);
    if (roll === 0) {
        turn = play1;
    } else {
        turn = play2;
    }

    // actual game loop
    for (let i = 0; i < 9; i++) {
        do {
            let move = prompt(turn.name + ", your move");
            validity = gameBoard.mark(turn, move);
        } while (validity === 1);

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
});

