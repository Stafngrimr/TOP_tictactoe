const domManip = (function() {
    
    const poPink = document.querySelector("#playo_pink");
    const poPurple = document.querySelector("#playo_purple");
    const poTeal = document.querySelector("#playo_teal");
    const poGreen = document.querySelector("#playo_green");
    const poBlue = document.querySelector("#playo_blue");
    const poYellow = document.querySelector("#playo_yellow");
    const poOrange = document.querySelector("#playo_orange");
    
    const pxRed = document.querySelector("#playx_red");
    const pxPink = document.querySelector("#playx_pink");
    const pxPurple = document.querySelector("#playx_purple");
    const pxTeal = document.querySelector("#playx_teal");
    const pxGreen = document.querySelector("#playx_green");
    const pxBlue = document.querySelector("#playx_blue");
    const pxYellow = document.querySelector("#playx_yellow");
    const pxOrange = document.querySelector("#playx_orange");

    // select all the markers for p1 & p2 for "selection" purposes
    const markers_o = document.querySelectorAll(".markers_o");
    const markers_x = document.querySelectorAll(".markers_x");

    // status selectors
    const gameStatus = document.querySelector("#status");
    const oStatus = document.querySelector("#o_status");
    const xStatus = document.querySelector("#x_status");

    // buttons
    const reset = document.querySelector("#reset");
    const clean = document.querySelector("#clean");

    return { poRed, poPink, poPurple, poTeal, poGreen, poBlue, poYellow, poOrange, pxRed, pxPink, pxPurple, pxTeal, pxGreen, pxBlue, pxYellow, pxOrange, markers_o, markers_x, gameStatus, oStatus, xStatus, reset, clean }

})();

const colourPicker = (function() {
    markers_o.forEach((color) => {
        color.addEventListener("click", () => {
            const file = "img/" + color.dataset.color + "_marker.png";
            console.log(file);
            oStatus.textContent = "You've selected " + color.dataset.color;
            color.classList.toggle("selected");

            let elem = color.parentNode.firstChild;
            elem = elem.nextSibling;
            console.log(color.parentNode);
            console.log(color);
            console.log(elem);


            for (let i=0;i<8;i++) {
                if (elem.dataset.color === color.dataset.color) {
                    continue;
                } else {
                    if (elem.classList.contains("selected") === true) {
                        elem.classList.toggle("selected");
                    }
                }
                // should we cycle through colors this way? if we can't hit the "next sibling" then go to first?
                elem = elem.nextSibling;
            }
        }
    )});

    markers_x.forEach((color) => {
        color.addEventListener("click", () => {
            const file = "img/" + color.dataset.color + "_marker.png";
            console.log(file);
            xStatus.textContent = "You've selected " + color.dataset.color;
        }
    )});
    
})();

function createPlayer(name, marker) {
    let display = name + "(" + marker + ")";

    return { name, marker, display, color }
}

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


const game = (function() {
    const playo = createPlayer("Steve", "o");
    const playx = createPlayer("Tom", "x");
    let turn;
    let validity;
    let winner = false;
    
    // determining who goes first
    let roll = Math.floor(Math.random() * 2);
    if (roll === 0) {
        turn = playo;
    } else {
        turn = playx;
    }

    // actual game loop
    for (let i = 0; i < 9; i++) {
        do {
            let move = prompt(turn.name + ", your move");
            validity = gameBoard.mark(turn, move);
        } while (validity === 1);

        winner = gameBoard.check(turn);
        if (winner === false) {
            if (turn === playo) {
                turn = playx;
            } else {
                turn = playo;
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

