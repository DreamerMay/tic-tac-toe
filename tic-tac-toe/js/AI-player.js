console.log("AI-player.js");


const g = [
  " ", " ", " ",
  " ", " ", " ",
  " ", " ", " "
];


let playerOneIsNext = true;
let turn = 0;
let matchCompleted = false;


const xPlayer = function (index) {
  g[index] = "x";
};

const oPlayer = function (index) {
  g[index] = "o";
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
      updateScreen()

      // call AI play
      setTimeout (function() {
        priorityMove();
        console.log("AI Playing");
        updateScreen()
        $('#playerY')[0].play();
        $('#x').css('border-bottom', '5px solid #FFC0CB');
        $('#o').css('border-bottom', '5px solid #555');
        },800)
      turn += 1;
      playerOneIsNext = true;
    }
    // checkWinner2();
    // matchResultMsg();
    // renew();
    // updateScreen()
  };
};


const aIattack = function() {
  if (turn >= 1 && g[4] === " " ) {
      oPlayer(4);
      return true
    }
      else if (g[0] === g[1] && g[0] === "o" && g[2] === " ") {
            oPlayer(2);
             return true
    }
      else if (g[0] === g[2] && g[0] === "o" && g[1] === " ") {
            oPlayer(1);
            return true
    }
      else if (g[1] === g[2] && g[1] === "o" && g[0] === " ") {
            oPlayer(0);
            return true
    }
    else if (g[3] === g[4] && g[3] === "o" && g[5] === " ") {
          oPlayer(5);
          return true
    }
    else if (g[3] === g[5] && g[3] === "o" && g[4] === " ") {
          oPlayer(4);
          return true
    }
    else if (g[4] === g[5] && g[4] === "o" && g[3] === " ") {
          oPlayer(3);
          return true
    }
    else if (g[6] === g[7] && g[6] === "o" && g[8] === " ") {
          oPlayer(9);
  return true
    }
    else if (g[6] === g[8] && g[6] === "o" && g[7] === " ") {
          oPlayer(7);
  return true
    }
    else if (g[7] === g[8] && g[7] === "o" && g[6] === " ") {
          oPlayer(6);
  return true
    }// column
    else if (g[0] === g[3] && g[0] === "o" && g[6] === " ") {
          oPlayer(6);
  return true
    }
    else if (g[0] === g[6] && g[0] === "o" && g[3] === " ") {
          oPlayer(3);
  return true
    }
    else if (g[6] === g[3] && g[6] === "o" && g[0] === " ") {
          oPlayer(0);
  return true
    }
    else if (g[1] === g[4] && g[1] === "o" && g[7] === " ") {
          oPlayer(7);
  return true
    }
    else if (g[1] === g[7] && g[1] === "o" && g[4] === " ") {
          oPlayer(4);
  return true
    }
    else if (g[4] === g[7] && g[4] === "o" && g[1] === " ") {
          oPlayer(1);
  return true
    }
    else if (g[2] === g[5] && g[2] === "o" && g[8] === " ") {
          oPlayer(8);
  return true
    }
    else if (g[2] === g[8] && g[2] === "o" && g[5] === " ") {
          oPlayer(5);
  return true
    }
    else if (g[5] === g[8] && g[5] === "o" && g[2] === " ") {
          oPlayer(2);
  return true
    } // Diagonal
    else if (g[0] === g[4] && g[0] === "o" && g[8] === " ") {
        oPlayer(8);
  return true
    }
    else if (g[0] === g[8] && g[0] === "o" && g[4] === " ") {
        oPlayer(4);
  return true
    }
    else if (g[4] === g[8] && g[4] === "o" && g[0] === " ") {
        oPlayer(0);
  return true
    }
    else if (g[2] === g[4] && g[2] === "o" && g[6] === " ") {
        oPlayer(6);
  return true
    }
    else if (g[2] === g[6] && g[2] === "o" && g[4] === " ") {
        oPlayer(4);
  return true
    }
    else if (g[6] === g[4] && g[6] === "o" && g[2] === " ") {
        oPlayer(2);
  return true
  }
  return false;
};

const aIdefence = function() {
    if (g[0] === g[1] && g[0] === "x" && g[2] === " ") {
          oPlayer(2);
          return true;
  }
    else if (g[0] === g[2] && g[0] === "x" && g[1] === " ") {
          oPlayer(1);
          return true;
  }
    else if (g[1] === g[2] && g[1] === "x" && g[0] === " ") {
          oPlayer(0);
          return true;
  }
  else if (g[3] === g[4] && g[3] === "x" && g[5] === " ") {
        oPlayer(5);
        return true;
  }
  else if (g[3] === g[5] && g[3] === "x" && g[4] === " ") {
        oPlayer(4);
        return true;
  }
  else if (g[4] === g[5] && g[4] === "x" && g[3] === " ") {
        oPlayer(3);
        return true;
  }
  else if (g[6] === g[7] && g[6] === "x" && g[8] === " ") {
        oPlayer(9);
        return true;
  }
  else if (g[6] === g[8] && g[6] === "x" && g[7] === " ") {
        oPlayer(7);
        return true;
  }
  else if (g[7] === g[8] && g[7] === "x" && g[6] === " ") {
        oPlayer(6);
        return true;
  }// column
  else if (g[0] === g[3] && g[0] === "x" && g[6] === " ") {
        oPlayer(6);
        return true;
  }
  else if (g[0] === g[6] && g[0] === "x" && g[3] === " ") {
        oPlayer(3);
        return true;
  }
  else if (g[6] === g[3] && g[6] === "x" && g[0] === " ") {
        oPlayer(0);
        return true;
  }
  else if (g[1] === g[4] && g[1] === "x" && g[7] === " ") {
        oPlayer(7);
        return true;
  }
  else if (g[1] === g[7] && g[1] === "x" && g[4] === " ") {
        oPlayer(4);
        return true;
  }
  else if (g[4] === g[7] && g[4] === "x" && g[1] === " ") {
        oPlayer(1);
        return true;
  }
  else if (g[2] === g[5] && g[2] === "x" && g[8] === " ") {
        oPlayer(8);
        return true;
  }
  else if (g[2] === g[8] && g[2] === "x" && g[5] === " ") {
        oPlayer(5);
        return true;
  }
  else if (g[5] === g[8] && g[5] === "x" && g[2] === " ") {
        oPlayer(2);
        return true;
  } // Diagonal
  else if (g[0] === g[4] && g[0] === "x" && g[8] === " ") {
      oPlayer(8);
      return true;
  }
  else if (g[0] === g[8] && g[0] === "x" && g[4] === " ") {
      oPlayer(4);
      return true;
  }
  else if (g[4] === g[8] && g[4] === "x" && g[0] === " ") {
      oPlayer(0);
      return true;
  }
  else if (g[2] === g[4] && g[2] === "x" && g[6] === " ") {
      oPlayer(6);
      return true;
  }
  else if (g[2] === g[6] && g[2] === "x" && g[4] === " ") {
      oPlayer(4);
      return true;
  }
  else if (g[6] === g[4] && g[6] === "x" && g[2] === " ") {
      oPlayer(2);
      return true;
  }
  return false;
};

const random = function() {
  for (let i = 0; i < g.length; i++) {
    console.log('iterating', i, g[i]);
    if (g[i] != "x" && g[i] != "o" && aIattack() === false && aIdefence() === false) {
      oPlayer(i);
      return;
    }
    // return true;
  }
  // return false;
};


const priorityMove = function () {
  if (aIattack() === false)     {
    if (aIdefence() === false) {
      random();
    }
  }
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
    }
   }
};

const matchResultMsg = function () {
// debugger;
  if (matchCompleted === true && turn >= 9) {
    $('#gameCompleted').html(`It's a Draw`).fadeIn();
    turn = 0;
    } else if (matchCompleted === true) {
      turn = 0;
      if (playerOneIsNext) {
        console.log("O is the winner");
        $('#gameCompleted').html(`O is a winner!`).fadeIn();
      } else {
        console.log("X is the winner");
        $('#gameCompleted').html(`X is a winner!`).fadeIn();
      }
    } else if (matchCompleted === false) {
        $('#gameCompleted').on('click', function(){
          $(this).fadeOut();
          renew()
          updateScreen()
        });
  };
};
