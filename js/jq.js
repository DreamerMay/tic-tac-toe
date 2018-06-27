console.log("jq.js");


const updateScreen = function() {
  for (let index = 0; index < g.length; index++) {
    $('#' + index ).html(g[index]);
  }
  console.log(matchCompleted);
  console.log(g);
  console.log(turn);
};



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

  $('.box').click(function(event){
     if (matchCompleted === false) {
    boxId = event.target.id;
    playerTurns(boxId);
    checkWinner2();
    matchResultMsg();
    renew();
    }
  });







}); // document ready
