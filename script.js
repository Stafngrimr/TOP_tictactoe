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
    const xStatus = document.querySelector("#x_status");

    // buttons
    const reset = document.querySelector("#reset");
    const clean = document.querySelector("#clean");

    return { s0, s1, s2, s3, s4, s5, s6, s7, s8, slots, oRed, oPink, oPurple, oTeal, oGreen, oBlue, oYellow, oOrange, xRed, xPink, xPurple, xTeal, xGreen, xBlue, xYellow, xOrange, oMarkers, xMarkers, status, oStatus, xStatus, reset, clean }
})();


function createPlayer(name, marker) {
    let display = name + "(" + marker + ")";


    return { name, marker, display }
}


const gameBoard = (function() {
    let arr = [0, 0, 0, 0, 0, 0, 0, 0 ,0]

    function mark(player, arrPos) {
        if (arr[arrPos] === 0) {
            arr[arrPos] = player.marker;
            let slot = "s" + arrPos;
            dom[slot].textContent = player.marker;
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

    return { mark, check, arr };
})();


const colourPicker = (function() {
    dom["oMarkers"].forEach((color) => {
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

    dom["xMarkers"].forEach((color) => {
        color.addEventListener("click", () => {
            const file = "img/" + color.dataset.color + "_marker.png";
            console.log(file);
        }
    )});
    
})();


const game = (function() {
    const player_o = createPlayer("OH", "o");
    const player_x = createPlayer("EX", "x");
    let turn;
    let count = 0;
    
    // determining who goes first
    let roll = Math.floor(Math.random() * 2);
    if (roll === 0) {
        turn = player_o;
        dom["oStatus"].textContent = "Your turn";
        dom["xStatus"].textContent = "";
    } else {
        turn = player_x;
        dom["xStatus"].textContent = "Your turn"
        dom["oStatus"].textContent = "";
    }
    
    // changing turns
    function changeTurn(turn) {
        if (turn === player_o) {
            dom["xStatus"].textContent = "Your turn";
            dom["oStatus"].textContent = "";
            return player_x;
        } else {
            dom["oStatus"].textContent = "Your turn";
            dom["xStatus"].textContent = "";
            return player_o;
        }
    }

    // actual game loop
    dom["slots"].forEach((slot) => {
        slot.addEventListener("click", () => {
            if (gameBoard.mark(turn, slot["id"].slice(1)) === 0) {
                if (gameBoard.check(turn) != false) {
                    if (turn === player_o) {
                        dom["oStatus"].textContent = "YOU WON!";
                        dom["xStatus"].textContent = "";
                        dom["status"].textContent = "Looks like we have a winner!";
                    } else {
                        dom["xStatus"].textContent = "YOU WON!";
                        dom["oStatus"].textContent = "";
                        dom["status"].textContent = "Looks like we have a winner!";
                    }
                } else {
                    turn = changeTurn(turn);
                    count++;
                    console.log(count);
                }
            } else {
                
            }
        })
    })

    if (count === 8) {
        status.textContent = "This one's a draw, press reset to start again.";
    }
})();

