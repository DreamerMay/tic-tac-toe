

// create an array for input

// player's turn - if p1 next will be p2 than back to p1, check same for p2 starter

// every p1 pick choice, update in array.

// when a player 01 click more 3 or more box, check "to win function"

//to win:
// row : i && i + 1 && i + i + 1
// column : i && i + 3 && i + i + 3
// cross : i && i + 4 && i + i + 4

//Find the smallest i to get into win function and check all

// When user

const board = [
  "o", "o", "o",
  "", "", "",
  "", "", ""
];

const xPlayerArray = [];
const oPlayerArray = [];
let playerOneIsNext = true;

const xPlayer = function (index) {
  xPlayerArray.push(index);
  board[index] = "X";
};

const oPlayer = function (index) {
  oPlayerArray.push(index);
  board[index] = "O";
};

const player_turns = function(index) {
  if (playerOneIsNext === true) {
    xPlayer(index);
    playerOneIsNext = false;
  } else {
    oPlayer(index);
    playerOneIsNext = true;
  }
};

// check back later;
// const ready_to_check = function (xPlayerArray, oPlayerArray) {
//   if (xplayerArray.length >= 3 || oplayerArray.length >= 3) {
//     return check_match();
//     }
//     else {
//       return false;
//     }
//   };

const check_match = function () {
  // let win1 = [0,1,2];
  // let win2 = [3,4,5];
  // let win3 = [6,7,8];
  // let win4 = [0,3,6];
  // let win5 = [1,4,7];
  // let win6 = [2,5,8];
  // let win7 = [0,4,8];
  // let win8 = [2,4,6];
  if (board[0] === board[1] && board[1] === board[2] && board[0] != "") {
    console.log(`${board[0]} Player win!`);
  }
  else if (board[3] === board[4] && board[4] === board[5] && board[3] != "") {
    console.log(`${board[3]} Player win!`);
  }
  else if (board[6] === board[7] && board[7] === board[8] && board[6] != "") {
    console.log(`${board[6]} Player win!`);
  }
  else if (board[0] === board[3] && board[3] === board[6] && board[0] != "") {
    console.log(`${board[0]} Player win!`);
  }
  else if (board[1] === board[4] && board[4] === board[7] && board[1] != "") {
    console.log(`${board[0]} Player win!`);
  }
  else if (board[2] === board[5] && board[5] === board[8] && board[2] != "") {
    console.log(`${board[2]} Player win!`);
  }
  else if (board[0] === board[4] && board[4] === board[8] && board[0] != "") {
    console.log(`${board[0]} Player win!`);
  }
  else if (board[2] === board[4] && board[4] === board[6] && board[2] != " ") {
    console.log(`${board[2]} Player win!`);
  } else {
    console.log("Draw");
  }
};
