console.log("jq.js");


$(document).ready(function() {

  // // user click a box, it shows the x or
  // $('#0').on('click', function() {
  //   player_turns(0);
  //   // updateScreen(0);
  // });
  //
  // $('#1').on('click', function() {
  //   player_turns(1);
  //   // updateScreen(1);
  // });
  // $('#2').on('click', function() {
  //   player_turns(2);
  //   // updateScreen(2);
  // });
  //
  // $('#3').on('click', function() {
  //   player_turns(3);
  //   // updateScreen(3);
  // });
  // $('#4').on('click', function() {
  //   player_turns(4);
  //   // updateScreen(4);
  // });
  //
  // $('#5').on('click', function() {
  //   player_turns(5);
  //   // updateScreen(5);
  // });
  // $('#6').on('click', function() {
  //   player_turns(6);
  //   // updateScreen(6);
  // });
  //
  // $('#7').on('click', function() {
  //   player_turns(7);
  //   // updateScreen(7);
  // });
  // $('#8').on('click', function() {
  //   player_turns(8);
  //   // updateScreen(8);
  // });
//  alternative way to update screen

  $('.box').click(function(){
    boxId = event.target.id;
    playerTurns(boxId);
    updateScreen();
    checkWinner();

//    pop_msg();

  });

  const updateScreen = function() {
    for (let index = 0; index < board.length; index++) {
      $('#' + index ).html(board[index]);
    }

  };


  // const pop_msg = function(){
  //
  // };






}); // document ready
