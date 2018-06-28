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
