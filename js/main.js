$(function() {
  var $cpuSquares = $('#cpuSquares div');
  var $userSquares = $('#userSquares div');
  var audio = $('#soundToPlay')[0];
  var currentIndex = 0;
  var userScore = [];

  $cpuSquares.each(function(i, square) {
    var parent = $("#cpuSquares");
    var divs = parent.children();
    while (divs.length) {
        parent.append(divs.splice(Math.floor(Math.random() * divs.length), 1)[0]);
    }
    setTimeout(function() {
      currentIndex = i;
      audio.src = "sounds/" + $(square).data('filename') + ".wav";
      console.log(audio.src);
      audio.play();
      $(square).fadeTo(1000, 0);
    }, i * 1000);
  });

  $userSquares.one('click', function() {
    var parent = $("#userSquares");
    var divs = parent.children();
    while (divs.length) {
        parent.append(divs.splice(Math.floor(Math.random() * divs.length), 1)[0]);
    }
    var filename = $(this).data('filename') + ".wav";
    var fileBeingPlayed = audio.src.split('/').slice(-1)[0];
    console.log(filename, fileBeingPlayed);
    if(filename === fileBeingPlayed) {
      $cpuSquares.eq(currentIndex).stop(true, false);
      userScore++;
      console.log(userScore);
    }
  });

document.getElementById("Score").textContent = userScore;
document.getElementById("Feedback").textContent = "Testing";

});
