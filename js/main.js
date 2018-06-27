console.log("main.js");

// create an array for input

// player's g - if p1 next will be p2 than back to p1, check same for p2 starter

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

const g = [
  " ", " ", " ",
  " ", " ", " ",
  " ", " ", " "
];


let playerOneIsNext = true;
let turn = 0;
let matchCompleted = false;
let winner ;


const xPlayer = function (index) {
  g[index] = "X";
};

const oPlayer = function (index) {
  g[index] = "O";
};

const playerTurns = function(index) {
  if (g[index] === " ") {
    if (playerOneIsNext === true ) {
      xPlayer(index);
      console.log("change button x")
      $('#o').css('border-bottom', '5px solid #FFC0CB');
      $('#x').css('border-bottom', '5px solid #555');

      turn += 1;
      playerOneIsNext = false;
    } else {
      oPlayer(index);
      $('#x').css('border-bottom', '5px solid #FFC0CB');
      $('#o').css('border-bottom', '5px solid #555');
      console.log("change button o")
      turn += 1;
      playerOneIsNext = true;
    }
  };
};

// const checkWinner = function () {
//
//   if (g[0] === g[1] && g[1] === g[2] && g[0] != " ") {
//     // alert (`${g[0]} Player win!`);
//     matchCompleted = true;
//     winner = g[0];
//     renew();
//   }
//   else if (g[3] === g[4] && g[4] === g[5] && g[3] != " ") {
//     // alert (`${g[3]} Player win!`);
//     matchCompleted = true;
//     winner = g[3];
//   }
//   else if (g[6] === g[7] && g[7] === g[8] && g[6] != " ") {
//     // alert (`${g[6]} Player win!`);
//     matchCompleted = true;
//     winner = g[6];
//   }
//   else if (g[0] === g[3] && g[3] === g[6] && g[0] != " ") {
//     // alert (`${g[0]} Player win!`);
//     matchCompleted = true;
//     winner = g[0];
//   }
//   else if (g[1] === g[4] && g[4] === g[7] && g[1] != " ") {
//     // alert (`${g[0]} Player win!`);
//     matchCompleted = true;
//     winner = g[1];
//   }
//   else if (g[2] === g[5] && g[5] === g[8] && g[2] != " ") {
//     // alert (`${g[2]} Player win!`);
//     matchCompleted = true;
//     winner = g[2];
//   }
//   else if (g[0] === g[4] && g[4] === g[8] && g[0] != " ") {
//     // alert (`${g[0]} Player win!`);
//     matchCompleted = true;
//     winner = g[0];
//   }
//   else if (g[2] === g[4] && g[4] === g[6] && g[2] != " ") {
//     // alert (`${g[2]} Player win!`);
//     matchCompleted = true;
//     winner = g[2];
//   }
//   else if (g >= 9){
//     alert (`It's a Draw!`);
//     renew();
//     win_match = false;
//   }
// };

const checkWinner2 = function() {
      updateScreen();
  if ((g[0] === g[1] && g[1] === g[2] && g[0] != " ") ||
      (g[3] === g[4] && g[4] === g[5] && g[3] != " ") ||
      (g[6] === g[7] && g[7] === g[8] && g[6] != " ") ||
      (g[0] === g[3] && g[3] === g[6] && g[0] != " ") ||
      (g[1] === g[4] && g[4] === g[7] && g[1] != " ") ||
      (g[2] === g[5] && g[5] === g[8] && g[2] != " ") ||
      (g[0] === g[4] && g[4] === g[8] && g[0] != " ") ||
      (g[2] === g[4] && g[4] === g[6] && g[2] != " ") ) {
        matchCompleted = true;
        winner = g[turn - 1];
        updateScreen();

    } else if (turn >= 9 ) {
        matchCompleted = true;
        updateScreen();

      } else {
        updateScreen();
      }
};


const renew = function() {

  if (matchCompleted === true) {
    for (var i = 0; i < g.length; i++) {
      g[i] = " ";

      matchCompleted = false;
    }
   }
};

const matchResultMsg = function () {
  if (matchCompleted === true && turn >= 9) {
    $('#gameCompleted').html(`It's a Draw`).fadeIn();
    turn = 0;
  } else if (matchCompleted === true) {
    $('#gameCompleted').html(`${winner} is a winner!`).fadeIn();
    turn = 0;
  } else if (matchCompleted === false) {
      $('#gameCompleted').on('click', function(){
        $(this).fadeOut();
      });
    };
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
