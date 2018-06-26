console.log("main.js");

// create an array for input

// player's turn - if p1 next will be p2 than back to p1, check same for p2 starter

// every p1 pick choice, update in array.

// when a player 01 click more 3 or more box, check "to win function"

// let win1 = [0,1,2];
// let win2 = [3,4,5];
// let win3 = [6,7,8];
// let win4 = [0,3,6];
// let win5 = [1,4,7];
// let win6 = [2,5,8];
// let win7 = [0,4,8];
// let win8 = [2,4,6];
//to win:
// row : i && i + 1 && i + i + 1
// column : i && i + 3 && i + i + 3
// cross : i && i + 4 && i + i + 4

//Find the smallest i to get into win function and check all

// When user

const board = [
  " ", " ", " ",
  " ", " ", " ",
  " ", " ", " "
];


let playerOneIsNext = true;
let turn = 0;
let winMatch = false;
let winner

const xPlayer = function (index) {
  board[index] = "X";
};

const oPlayer = function (index) {
  board[index] = "O";
};

const playerTurns = function(index) {
  if (board[index] === " ") {
    if (playerOneIsNext === true ) {
      xPlayer(index);
      turn += 1;
      playerOneIsNext = false;
    } else {
      oPlayer(index);
      turn += 1;
      playerOneIsNext = true;
    }
    restart(winMatch);

    // pop up message
  };
};


const checkWinner = function () {

  if (board[0] === board[1] && board[1] === board[2] && board[0] != " ") {
    // alert (`${board[0]} Player win!`);
    winMatch = true;
    winner = board[0];

  }
  else if (board[3] === board[4] && board[4] === board[5] && board[3] != " ") {
    // alert (`${board[3]} Player win!`);
    winMatch = true;
    winner = board[3];
  }
  else if (board[6] === board[7] && board[7] === board[8] && board[6] != " ") {
    // alert (`${board[6]} Player win!`);
    winMatch = true;
    winner = board[6];
  }
  else if (board[0] === board[3] && board[3] === board[6] && board[0] != " ") {
    // alert (`${board[0]} Player win!`);
    winMatch = true;
    winner = board[0];
  }
  else if (board[1] === board[4] && board[4] === board[7] && board[1] != " ") {
    // alert (`${board[0]} Player win!`);
    winMatch = true;
    winner = board[1];
  }
  else if (board[2] === board[5] && board[5] === board[8] && board[2] != " ") {
    // alert (`${board[2]} Player win!`);
    winMatch = true;
    winner = board[2];
  }
  else if (board[0] === board[4] && board[4] === board[8] && board[0] != " ") {
    // alert (`${board[0]} Player win!`);
    winMatch = true;
    winner = board[0];
  }
  else if (board[2] === board[4] && board[4] === board[6] && board[2] != " ") {
    // alert (`${board[2]} Player win!`);
    winMatch = true;
    winner = board[2];
  }
  else if (turn >= 9){
    alert (`It's a Draw!`);
    restart();
    win_match = false;
  }
};

const restart = function() {
  if (winMatch === true) {
    alert (`Player ${winner} is a winner!`);
    //clear array;
    for (var i = 0; i < board.length; i++) {
      board[i] = " ";
      winMatch === false;
      }
    }
};




// const xPlayerArray = [];
// const oPlayerArray = [];
// check back later;
// const ready_to_check = function (xPlayerArray, oPlayerArray) {
//   if (xplayerArray.length >= 3 || oplayerArray.length >= 3) {
//     return check_match();
//     }
//     else {
//       return false;
//     }
//   };
