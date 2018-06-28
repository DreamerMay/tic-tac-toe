console.log("main.js");


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
