const dom = (function() {
    // gameboard slots
    const s0 = document.querySelector("#s0");
    const s1 = document.querySelector("#s1");
    const s2 = document.querySelector("#s2");
    const s3 = document.querySelector("#s3");
    const s4 = document.querySelector("#s4");
    const s5 = document.querySelector("#s5");
    const s6 = document.querySelector("#s6");
    const s7 = document.querySelector("#s7");
    const s8 = document.querySelector("#s8");

    const slots = document.querySelectorAll(".slots");

    // colour slots
    const oRed = document.querySelector("#o_red");
    const oPink = document.querySelector("#o_pink");
    const oPurple = document.querySelector("#o_purple");
    const oTeal = document.querySelector("#o_teal");
    const oGreen = document.querySelector("#o_green");
    const oBlue = document.querySelector("#o_blue");
    const oYellow = document.querySelector("#o_yellow");
    const oOrange = document.querySelector("#o_orange");
    
    const xRed = document.querySelector("#x_red");
    const xPink = document.querySelector("#x_pink");
    const xPurple = document.querySelector("#x_purple");
    const xTeal = document.querySelector("#x_teal");
    const xGreen = document.querySelector("#x_green");
    const xBlue = document.querySelector("#x_blue");
    const xYellow = document.querySelector("#x_yellow");
    const xOrange = document.querySelector("#x_orange");

    const oMarkers = document.querySelectorAll(".o_markers");
    const xMarkers = document.querySelectorAll(".o_markers");

    // status divs
    const status = document.querySelector("#status");
    const oStatus = document.querySelector("#o_status");
    const xStatus = document.querySelector("#o_status");

    // buttons
    const reset = document.querySelector("#reset");
    const clean = document.querySelector("#clean");

    return { s0, s1, s2, s3, s4, s5, s6, s7, s8, slots, oRed, oPink, oPurple, oTeal, oGreen, oBlue, oYellow, oOrange, xRed, xPink, xPurple, xTeal, xGreen, xBlue, xYellow, xOrange, oMarkers, xMarkers, Status, oStatus, xStatus, reset, clean }
})();


function createPlayer(name, marker) {
    let display = name + "(" + marker + ")";

    return { name, marker, display }
}


const gameBoard = (function() {
    let arr = [0, 0, 0, 0, 0, 0, 0, 0 ,0]

    function mark(player, arrPos) {
        if (arr[arrPos] === 0 && arrPos != NaN && arrPos.length === 1) {
            arr[arrPos] = player.marker;
            let sl = "s" + arrPos;
            dom[sl].textContent = player.marker;
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


const colourPicker = (function() {
    dom["markers_o"].forEach((color) => {
        color.addEventListener("click", () => {
            const file = "img/" + color.dataset.color + "_marker.png";
            console.log(file);
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

    dom["markers_x"].forEach((color) => {
        color.addEventListener("click", () => {
            const file = "img/" + color.dataset.color + "_marker.png";
            console.log(file);
        }
    )});
    
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
        dom["oStatus"].textContent = "Your turn";
        dom.xStatus.textContent = "";
    } else {
        turn = playx;
        dom["xStatus"].textContent = "Your turn"
        dom.oStatus.textContent = "";
    }

    // actual game loop
//    for (let i = 0; i < 9; i++) {
//        // TODO: this is breaking the game. This loops doesn't let the page load. Why?
//        do {
//            let move;
//            dom["slots"].forEach((slot) => {
//                slot.addEventListener("click", () => {
//                    move = slot["id"].slice(1);
//                })
//            })
//            validity = gameBoard.mark(turn, move);
//        } while (validity === 1); 
//
//        winner = gameBoard.check(turn);
//        if (winner === false) {
//            if (turn === playo) {
//                turn = playx;
//            } else {
//                turn = playo;
//            }
//        } else {
//          //  break;
//        }
//    }
    
    if (winner === false) {
        console.log("I'm afraid it's a draw folks!");
    } else {
        console.log(turn.name + " is the winner!");
    }
})();

