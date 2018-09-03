console.log("two-player.js");


const g = [
  " ", " ", " ",
  " ", " ", " ",
  " ", " ", " "
];


let playerOneIsNext = true;
let turn = 0;
let matchCompleted = false;
let gameCountO = 0;
let gameCountX = 0;


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
      $('#playerX')[0].play();
      $('#o').css('border-bottom', '5px solid #FFC0CB');
      $('#x').css('border-bottom', '5px solid #555');
      turn += 1;
      playerOneIsNext = false;
    } else {
      oPlayer(index);
      $('#playerY')[0].play();
      $('#x').css('border-bottom', '5px solid #FFC0CB');
      $('#o').css('border-bottom', '5px solid #555');
      turn += 1;
      playerOneIsNext = true;
    }

  };
  console.log(playerOneIsNext);
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

        $('#win')[0].play();
        updateScreen();

    } else if (turn >= 9 ) {
        matchCompleted = true;
        updateScreen();
        $('#draw')[0].play();
      } else {
        updateScreen();
      }
};


const renew = function() {

  if (matchCompleted === true) {
    for (var i = 0; i < g.length; i++) {
      g[i] = " ";
      matchCompleted = false;
      $('#x').html(`X___${gameCountX}`);
      $('#o').html(`O___${gameCountO}`);
    }
   }
};

const matchResultMsg = function () {

  if (matchCompleted === true && turn >= 9) {
    $('#gameCompleted').html(`It's a Draw`).fadeIn();
    turn = 0;
  } else if (matchCompleted === true) {
    turn = 0;
    if (playerOneIsNext) {
      console.log("O is the winner");
      $('#gameCompleted').html(`O is a winner!`).fadeIn();
      gameCountO += 1;
    } else {
      console.log("X is the winner");
      $('#gameCompleted').html(`X is a winner!`).fadeIn();
      gameCountX += 1;
    }


  } else if (matchCompleted === false) {
      $('#gameCompleted').on('click', function(){
        $(this).fadeOut();
        renew()
        updateScreen()
      });
    };
};
