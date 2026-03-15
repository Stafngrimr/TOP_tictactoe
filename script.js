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

    // score divs
    const oScore = document.querySelector("#o_score");
    const xScore = document.querySelector("#x_score");

    // status divs
    const status = document.querySelector("#status");
    const oTurn = document.querySelector("#left_container");
    const xTurn = document.querySelector("#right_container");

    // buttons
    const reset = document.querySelector("#reset");
    const clean = document.querySelector("#clean");

    return { s0, s1, s2, s3, s4, s5, s6, s7, s8, slots, oRed, oPink, oPurple, oTeal, oGreen, oBlue, oYellow, oOrange, xRed, xPink, xPurple, xTeal, xGreen, xBlue, xYellow, xOrange, oMarkers, xMarkers, oScore, xScore, status, oTurn, xTurn, reset, clean }
})();


function createPlayer(name, marker) {
    let score = 0;

    return { name, marker, score }
}


const gameBoard = (function() {
    let arr = [0, 0, 0, 0, 0, 0, 0, 0 ,0];

    function reset() {
        arr = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    }

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
        if (arr[0] === player.marker && arr[1] === player.marker && arr[2] === player.marker) {
            s0.style.backgroundColor = "green";
            s0.style.color = "white";
            s1.style.backgroundColor = "green";
            s1.style.color = "white";
            s2.style.backgroundColor = "green";
            s2.style.color = "white";
            return player;
        } else if (arr[3] === player.marker && arr[4] === player.marker && arr[5] === player.marker) {
            s3.style.backgroundColor = "green";
            s3.style.color = "white";
            s4.style.backgroundColor = "green";
            s4.style.color = "white";
            s5.style.backgroundColor = "green";
            s5.style.color = "white";
            return player;
        } else if (arr[6] === player.marker && arr[7] === player.marker && arr[8] === player.marker) {
            s6.style.backgroundColor = "green";
            s6.style.color = "white";
            s7.style.backgroundColor = "green";
            s7.style.color = "white";
            s8.style.backgroundColor = "green";
            s8.style.color = "white";
            return player;
        } else if (arr[0] === player.marker && arr[3] === player.marker && arr[6] === player.marker) {
            s0.style.backgroundColor = "green";
            s0.style.color = "white";
            s3.style.backgroundColor = "green";
            s3.style.color = "white";
            s6.style.backgroundColor = "green";
            s6.style.color = "white";
            return player;
        } else if (arr[1] === player.marker && arr[4] === player.marker && arr[7] === player.marker) {
            s1.style.backgroundColor = "green";
            s1.style.color = "white";
            s4.style.backgroundColor = "green";
            s4.style.color = "white";
            s7.style.backgroundColor = "green";
            s7.style.color = "white";
            return player;
        } else if (arr[2] === player.marker && arr[5] === player.marker && arr[8] === player.marker) {
            s2.style.backgroundColor = "green";
            s2.style.color = "white";
            s5.style.backgroundColor = "green";
            s5.style.color = "white";
            s8.style.backgroundColor = "green";
            s8.style.color = "white";
            return player;
        } else if (arr[0] === player.marker && arr[4] === player.marker && arr[8] === player.marker) {
            s0.style.backgroundColor = "green";
            s0.style.color = "white";
            s4.style.backgroundColor = "green";
            s4.style.color = "white";
            s8.style.backgroundColor = "green";
            s8.style.color = "white";
            return player;
        } else if (arr[2] === player.marker && arr[4] === player.marker && arr[6] === player.marker) {
            s2.style.backgroundColor = "green";
            s2.style.color = "white";
            s4.style.backgroundColor = "green";
            s4.style.color = "white";
            s6.style.backgroundColor = "green";
            s6.style.color = "white";
            return player;
        } else {
            return false;
        }
    }

    return { mark, check, reset };
})();


// TODO: Picking your colour does not work AT ALL
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

const mech = (function() {
    // create players
    const player_o = createPlayer("OH", "o");
    const player_x = createPlayer("EX", "x");

    // function for changing turns
    function changeTurn(turn) {
        if (turn === player_o) {
            dom["xTurn"].style.border = "2px solid green";
            dom["oTurn"].style.border = "2px solid gray";
            return player_x;
        } else {
            dom["oTurn"].style.border = "2px solid green";
            dom["xTurn"].style.border = "2px solid gray";
            return player_o;
        }
    }
    
    // function for determining who goes first
    function rollFirst() {
        let roll = Math.floor(Math.random() * 2);
        if (roll === 0) {
            dom["oTurn"].style.border = "2px solid green";
            dom["xTurn"].style.border = "2px solid gray";
            return player_o;
        } else {
            dom["xTurn"].style.border = "2px solid green";
            dom["oTurn"].style.border = "2px solid gray";
            return player_x;
        }
    }
    
    return { player_o, player_x, changeTurn, rollFirst }
})();



const game = (function() {
    // game mechanics vars
    let turn = mech.rollFirst();
    let count = 0;
    let winner = false;
    
    dom["slots"].forEach((slot) => {
        slot.addEventListener("click", () => {
            if (gameBoard.mark(turn, slot["id"].slice(1)) === 0) {
                if (gameBoard.check(turn) != false) {
                    if (turn === mech.player_o) {
                        dom["status"].textContent = "o player won! Press clean to start next round!";
                        mech["player_o"].score++;
                        dom["oScore"].textContent = "o - " + mech["player_o"].score;
                    } else {
                        dom["status"].textContent = "x player won! Press clean to start next round!";
                        mech["player_x"].score++;
                        dom["xScore"].textContent = "x - " + mech["player_x"].score;
                    }
                    winner = true;
                    dom["status"].textContent = "Looks like we have a winner! Press clean to start the next round";
                } else {
                    turn = mech.changeTurn(turn);
                    count++;
                    if (count === 9 && winner === false) {
                        dom["status"].textContent = "This one's a draw, press clean to start again.";
                    }
                }
            } else {
                dom["status"].textContent = "Can't go there, try again";
            }
        })
    });


    dom["reset"].addEventListener("click", () => {
        dom["slots"].forEach((slot) => {
            slot.textContent = "";
            slot.style.backgroundColor = "white";
            slot.style.color = "black";
        })
        mech["player_o"].score = 0;
        mech["player_x"].score = 0;
        dom["oScore"].textContent = "o - " + mech["player_o"].score;
        dom["xScore"].textContent = "o - " + mech["player_x"].score;
        dom["status"].textContent = "Change your colour or play the game!";
        gameBoard.reset();
        count = 0;
        winner = false;
    });

    dom["clean"].addEventListener("click", () => {
        dom["slots"].forEach((slot) => {
            slot.textContent = "";
            slot.style.backgroundColor = "white";
            slot.style.color = "black";
        })
        gameBoard.reset();
        dom["status"].textContent = "The game begins again!";
        mech.rollFirst();
        count = 0;
        winner = false;
    })
})();

