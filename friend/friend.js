let copy_right = document.getElementById('copy_right');
var year = new Date();
var current_year = year.getFullYear();

copy_right.innerHTML = '&copy; ' + current_year + ' | Anele Nkayi.'

const cells = document.querySelectorAll(".cell");
const statusText = document.querySelector("#statusText");
const restartBtn = document.querySelector("#restartBtn");
const winConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];
let options = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = "X";
let running = false;






initializeGame();

function initializeGame(){
    document.querySelector('.endgame').style.display = "none";
    document.querySelector("#restartBtn").style.display = "none";
    document.querySelector('.endgame .text').innerText ="";

    cells.forEach(cell => cell.addEventListener("click", cellClicked));
    restartBtn.addEventListener("click", restartGame);
    statusText.textContent = `${currentPlayer}'s turn`;
    running = true;
}
function cellClicked(){
    const cellIndex = this.getAttribute("cellIndex");

    if(options[cellIndex] != "" || !running){
        return;
    }

    updateCell(this, cellIndex);
    checkWinner();
}
function updateCell(cell, index){
    options[index] = currentPlayer;
    cell.textContent = currentPlayer;
}
function changePlayer(){
    currentPlayer = (currentPlayer == "X") ? "O" : "X";
    statusText.textContent = `${currentPlayer}'s turn`;
}
function checkWinner(){
    let roundWon = false;

    for(let i = 0; i < winConditions.length; i++){
        const condition = winConditions[i];
        const cellA = options[condition[0]];
        const cellB = options[condition[1]];
        const cellC = options[condition[2]];

        if(cellA == "" || cellB == "" || cellC == ""){
            continue;
        }
        if(cellA == cellB && cellB == cellC){
            roundWon = true;

            for (let x of condition) {
                if (currentPlayer === "X") {
                    cells[parseInt(x)].style.backgroundColor = "green";
                }
                else {
                    cells[parseInt(x)].style.backgroundColor = "red";
                }
            }

            break;
        }
    }

    if(roundWon){
        document.querySelector(".endgame").style.display = "block";
        document.querySelector("#restartBtn").style.display = "block";
        document.querySelector(".endgame .text").innerText = `${currentPlayer} wins!`;


        statusText.textContent = "";
        running = false;
    }
    else if(!options.includes("")){
        document.querySelector(".endgame").style.display = "block";
        document.querySelector("#restartBtn").style.display = "block";
        document.querySelector(".endgame .text").innerText = `Draw!`;

        statusText.textContent = "";
        running = false;
    }
    else{
        changePlayer();
    }
}
function restartGame(){
    document.querySelector("#restartBtn").style.display = "none";
    document.querySelector('.endgame').style.display = "none";
    document.querySelector('.endgame .text').innerText ="";

    currentPlayer = "X";
    options = ["", "", "", "", "", "", "", "", ""];
    statusText.textContent = `${currentPlayer}'s turn`;
    for (let i = 0; i < cells.length; i++) {
        cells[i].innerText = '';
        cells[i].style.removeProperty('background-color');
    }
    // cells.forEach(cell => cell.textContent = "");
    running = true;
}